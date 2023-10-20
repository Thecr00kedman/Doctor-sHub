import {Box,styled} from '@mui/material'

export const NavContainer = styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'row',
    background:'white',
    justifyContent:'space-between',
    color:'black',
    fontWeight:'600',
    alignItems:'center',
    whiteSpace:'nowrap',
    boxShadow:'2px 3px 10px 2px red',
    
    "& div":{ 
        display:'flex',
        cursor:'pointer',
        alignItems:'center',
        fontSize:"1rem",
    },
}
))
export const Left = styled(Box)((theme)=>({
       display:'flex',
       flexDirection:'row',
       textAlign:'left',
       "& div":{
        padding:'1rem'
       }
}
))
export const Right = styled(Box)((theme)=>({
    "& div":{
        padding:'0.6rem 0.5rem'
       }
}
))
export const NavLinks = styled(Box)((theme)=>({
    "&:hover":{
        background:"white",
        color:"black",

      },
}
))