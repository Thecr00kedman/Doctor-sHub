import { Container,Box } from "@mui/material"
import Bannerimage from '../../assets/media/Banner.png'


export const Banner = () =>{

    return(
        <Container sx={{display:'flex',alignItems:"center", marginTop:'1rem',justifyContent:'center',padding:"1rem"}}>
            <Box><img src={Bannerimage} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'18px'}}alt="Image" /></Box>
        </Container>
    )
}

export default Banner