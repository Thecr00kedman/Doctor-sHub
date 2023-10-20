import { Box, Dialog } from "@mui/material";
import { useState } from "react";
import { DialogBox,SubHeader,ImageContainer,MainContainer } from "./styles";
import { TextField, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";


const defaultValues= {
    name:'',
    email:'',
    password:'',

}


export const Register = ({ open, onClose }) => {
  const [toggle, setToggle] = useState(false);
  const [formValues,setFormValues]= useState(defaultValues)
  const RegisterUser=async()=>{
    await AddUser(formValues);
  }
  
  const handleChange=(e)=>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
    console.log(formValues)

  }

  return (
    <Dialog open={open} onClose={onClose}>
      
      <SubHeader>
        <NavLink onClick={() => setToggle(true)}>
          <Typography variant="h5"sx={{color:"#00E6D1"}}>Login</Typography>
        </NavLink>
        <NavLink onClick={()=>setToggle(false)}>
          <Typography variant="h5" sx={{color:"#00E6D1"}}>Register</Typography>
        </NavLink>
      </SubHeader>
      <MainContainer>
      <ImageContainer>
        <img src="https://accounts.practo.com/static/images/illustration.png" alt="image" />
      </ImageContainer>
      
        {!toggle ? (
          <DialogBox>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography>Join Us</Typography>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography>Are You a Doctor?</Typography>
                <Typography>Register Here</Typography>
              </div>
            </Box>
            <Box>
              <TextField onChange={(e)=>handleChange(e)}type="text" name="name" label="Name" />
            </Box>
            <Box>
              <TextField onChange={(e)=>handleChange(e)} type="email" name="email" label="Email" />
            </Box>
            <Box>
              <TextField onChange={(e)=>handleChange(e)} type="password" name="password" label="Password" />
            </Box>
            <Button variant="contained" onClick={()=>RegisterUser()}>Register</Button>
          </DialogBox>
        ) : (
          <DialogBox>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography>Join Doctor's Hub</Typography>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography>Are You a Doctor?</Typography>
                <Typography>Register Here</Typography>
              </div>
            </Box>
            <Box>
              <TextField type="email" name="email" label="Email" />
            </Box>
            <Box>
              <TextField type="password" name="password" label="Password" />
            </Box>
            <Button variant="contained">Login</Button>
          </DialogBox>
        )}
      </MainContainer>
    </Dialog>
  );
};

export default Register;

