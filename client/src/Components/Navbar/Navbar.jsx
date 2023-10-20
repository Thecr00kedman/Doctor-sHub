import React, { useState } from "react";
import {NavLinks,NavContainer,Left,Right} from './styles'
import Register from "../ResgisterPop/Register";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';



export const Navbar =()=>{
    const[openRegister,setOpenRegister]= useState(false)
    const handleOpen=()=>{
        setOpenRegister(true)
    }
    const handleClose= ()=>{
        setOpenRegister(false)
    }

    const[toggle,setToggle]= useState(false)

    
    
    return(

        <NavContainer>
                <Left><NavLinks>Home</NavLinks>
                     <NavLinks>About</NavLinks>
                     <NavLinks>Services</NavLinks>        
                     <NavLinks>Medicines</NavLinks>  
                </Left>    
                <Right><NavLinks onClick={handleOpen}>Register</NavLinks></Right>
                <Register open={openRegister} onClose={handleClose}/> 
    </NavContainer>
    )

}

export default Navbar