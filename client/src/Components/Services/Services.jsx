import { Card,Box,Typography, Grid} from "@mui/material"
import { ServicesData } from "../../assets/media/Data"
import {CardMedia} from "@mui/material"
import {CardContent} from "@mui/material"



export const Services = ()=>{


    return(
        <div>
            <Grid container spacing={2} sx={{padding:'1rem'}}>
           {
            ServicesData?.map((item)=>(
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Card sx={{borderRadius:'12px'}} key={item?.id}>
                     <CardMedia sx={{height:'20rem',padding:'1rem'}}><img src={item?.url} alt="an image" style={{height:'100%',width:'100%',objectFit:'cover'}}/></CardMedia>
                     <CardContent sx={{background:'black',color:'white'}}>
                        <Box><Typography>{item?.Caption}</Typography></Box>
                        <Box><Typography>{item?.content}</Typography></Box>
                     </CardContent>
                </Card>
                </Grid>
            ))
           }
           </Grid>
        </div>
    )
}
export default Services