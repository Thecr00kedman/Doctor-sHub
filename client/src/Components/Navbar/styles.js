import {Box,styled} from '@mui/material'

export const NavContainer = styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'row',
    background:'white',
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
        "@media only screen and (max-width: 520px)":{
            display:'flex',
            flexDirection:'column',
            textAlign:'left',
            alignItems:'flex-start',
            "& div":{
                alignItems:'flex-start',

            }
           },
    },
}
))
export const Left = styled(Box)((theme)=>({
       display:'flex',
       flexDirection:'row',
       "& div":{
        padding:'1rem'
       }
}
))
export const Right = styled(Box)((theme)=>({
    padding:'1rem',
}


))
export const NavLinks = styled(Box)((theme)=>({
    "&:hover":{
        background:"white",
        color:"black",
      },
      textAlign:'left',
}
))