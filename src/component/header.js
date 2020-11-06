import React ,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useDispatch} from "react-redux";
import {Filter} from '../redux/action'


function Header(props) {
    const [Input,setInput]=useState();

    const handleInput =(e)=>{
        var input=e.target.value
        console.log(input)
        setInput(input)

    }
    const dispatch = useDispatch()
    const handleButton=(e)=>{
        dispatch(Filter(e))
        alert(e)

    }

    return (
        <>
          <div>
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton edge="start" style={{ marginRight: "2px" }} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                  Weather Forcast
            </Typography>
  
                <InputBase
                  placeholder="Search…"
                  name="userInput"
                  inputProps={{ 'aria-label': 'search' }} style={{ marginLeft: "60%", paddingLeft: "1%", borderRadius: "5px", backgroundColor: "white" }}
                  onChange={(e) => handleInput(e)}
                />
                <IconButton aria-label="search" color="inherit" >
                  <SearchIcon style={{ justifySelf: "center", alignSelf: "center", flex: "center" }}  onClick={()=>handleButton(Input)}/>
                </IconButton>
  
              </Toolbar>
            </AppBar>
            
          </div>
         
        </>
      );
}

export default Header;