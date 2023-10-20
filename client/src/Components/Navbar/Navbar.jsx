import React, { useEffect, useState } from "react";
import {NavLinks,NavContainer,Left,Right} from './styles'
import Register from "../ResgisterPop/Register";
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';




export const Navbar =()=>{
    const[openRegister,setOpenRegister]= useState(false)
    const handleOpen=()=>{
        setOpenRegister(true)
    }
    const handleClose= ()=>{
        setOpenRegister(false)
    }
    const width= window.innerWidth
    const[innerWidth,setInnerWidth]= useState(width)
    
    useEffect(()=>{
       setInnerWidth(width);
    },[width])
    
    // console.log(width)
    const[toggle,setToggle]=useState(false)
    const openMenu=()=>{
        setToggle(true)
    }
    const closeMenu=()=>{
        setToggle(false)
    }
    
    return(

        <NavContainer>
                {
                  (innerWidth<528)?(
                  <>
                  {
                    toggle?(
                    <Box>
                    <div className="closemenu"><ClearIcon onClick={closeMenu}/></div>
                    <Left>
                     <NavLinks>Home</NavLinks>
                     <NavLinks>About</NavLinks>
                     <NavLinks>Services</NavLinks>        
                     <NavLinks>Medicines</NavLinks>  
                </Left>    
                <Right><NavLinks onClick={handleOpen}>Register</NavLinks></Right>
                <Register open={openRegister} onClose={handleClose}/>
                </Box>):
                    <div className="hamburger"><MenuIcon onClick={openMenu} /></div>
                  }
                  
                  </>)
             
             :(<>
                <Left>
                     <NavLinks>Home</NavLinks>
                     <NavLinks>About</NavLinks>
                     <NavLinks>Services</NavLinks>        
                     <NavLinks>Medicines</NavLinks>  
                </Left>    
                <Right><NavLinks onClick={handleOpen}>Register</NavLinks></Right>
                <Register open={openRegister} onClose={handleClose}/> </>)  
                }
    </NavContainer>
    )

}

export default Navbar