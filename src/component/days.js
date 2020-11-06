import React ,{useState,useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Header from './header'
import { useSelector } from "react-redux";

function Days(props) {
    const [Days,setDays]=useState(["Date","Max Temp","Max Temp","Temp"," Weather State Name","Weather State Abbr","Humidity","Wind Speed","Wind Direction Compass","Air Pressure"]);
    const data=useSelector((state)=>state.consolidated_weather)
    console.log(data)

    useEffect(()=>{

    },[])
    return (
        <div >
          <div><Header/></div>
          <h2 style={{ marginLeft: "10px" }}>5 Days Weather Report of&nbsp;<i>"{props.location.record}"</i></h2>
          <TableContainer component={Paper} style={{ maxWidth: "95%", marginTop: "20px", marginLeft: "10px" }}>
            <Table style={{ minWidth: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor: "red" }}>
                    {Days.map((item)=>(
                  <TableCell align="center"><b>{item}</b></TableCell>))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(0, 5).map((item) => (
                  <TableRow >
                    <TableCell component="th" scope="row">
                      {item.applicable_date}
                    </TableCell>
                    <TableCell align="center">{item.max_temp.toFixed(2)}℃</TableCell>
                    <TableCell align="center">{item.min_temp.toFixed(2)}℃</TableCell>
                    <TableCell align="center">{item.the_temp.toFixed(2)}℃</TableCell>
                    <TableCell align="center">{item.weather_state_name}</TableCell>
                    <TableCell align="center">{item.weather_state_abbr}</TableCell>
                    <TableCell align="center">{item.humidity}%</TableCell>
                    <TableCell align="center">{item.wind_speed.toFixed(2)}</TableCell>
                    <TableCell align="center">{item.wind_direction_compass}</TableCell>
                    <TableCell align="center">{item.air_pressure}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </div>
  );
}

export default Days;