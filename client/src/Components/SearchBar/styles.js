import { Box,styled } from "@mui/material"

export const SearchBox = styled(Box)((theme)=>({
    paddingTop:'2rem',
    display:'flex',
    justifyContent:'center',

}))
export const Container = styled(Box)((theme)=>({
     display:'flex',
     flexDirection:'row',
     alignItems:'center',
     border:'none',
     borderRadius:'12px',
     cursor:'pointer',
     "& input":{
      width:'70vw', 
      fontSize:'1.2rem',
      padding:'0.8rem',
      borderRadius:'28px',
      
      "&:focus":{

        outlineColor:'#0BE3D0 ',
        outlineBlur:'3px',
        
      }

     },
     "& >svg":{
        cursor:'pointer',
        borderRadius:'50%',
        height:'3rem',
        width:'3rem',
        padding:'7px',
        border:'1px solid black',
        background:"white",
        cursor:'pointer',

     },
     
     
   
}))