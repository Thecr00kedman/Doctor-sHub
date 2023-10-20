import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const DialogBox = styled(Box)((theme) => ({
  display:'flex',
  flexDirection:"column",
  alignItems: "center",
  fontSize: "14px",
  width: "100%",
  padding: "1rem",
  "& div": {
    padding: "0.2rem",
    alignItems: "center",
    gap: "10px",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    "& p":{
        cursor:'pointer',
        fontSize:"12px",
        color:'#03C6D9',
        whiteSpace:'nowrap',
        fontFamily:'"proxima-soft", "Proxima Soft", "Proxima Nova Soft", Helvetica, Arial, sans-serif'
    }
  },
}));
export const SubHeader = styled(Box)((theme) => ({
  display: "flex",
  paddingTop: "6px",
  flexDirection: "row",
  justifyContent: "space-around",
  textDecoration: "none",
  "& a": { 
    textDecoration: "none",
    color: "black",
  },
}));
export const ImageContainer = styled(Box)((theme) => ({
  padding: "0.5rem",
  width: "100%",
  "& img": {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
  '@media screen and (max-width: 520px)': {
    display:'none',
  }
}));
export const MainContainer = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "row",
}));
