import React ,{useState,useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch} from "react-redux";
import {Reload,FilterR} from '../redux/action'

function Citys(props) {
    const [City,setCity]=useState(["City Name", "Location Type", "woeid", "Latt. & Long.", "Check Weather Details"]);

    const data = useSelector((state)=>state.Wdata);
    console.log(data);
    const reload=()=>{
        dispatch(Reload()) 
    }
    const handleDays=(e)=>{
        dispatch(FilterR(e))
        
    }

const dispatch = useDispatch()
    useEffect(()=>{
        reload()


    })
    return (
        <>
            <div>

                <h2 style={{ marginLeft: "10px" }}>CITY RECORD</h2>
                <TableContainer component={Paper} style={{ maxWidth: "95%", marginTop: "20px", marginLeft: "10px" }}>

                    <Table style={{ minWidth: "100%" }} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: "red" }}>
                            {City.map((row) => (
                            <TableCell align="center"><b>{row}</b></TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                             {data.map((row) => (
                                <TableRow >
                                    <TableCell component="th" scope="row" >
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="center">{row.location_type}</TableCell>
                                    <TableCell align="center">{row.woeid}</TableCell>
                                    <TableCell align="center">{row.latt_long}</TableCell>
                                    <TableCell align="center"><Link to={{pathname:"/weather",record:row.title}}><Button variant="contained" color="primary" onClick={()=>handleDays(row.woeid)}>Check
                                </Button></Link></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>

        </>
    );
}


export default (Citys);
