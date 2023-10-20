import Navbar from "../Components/Navbar/Navbar";
import Search from "../Components/SearchBar/Search";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Services from "../Components/Services/Services";
import Register from "../Components/ResgisterPop/Register";
import { useState } from "react";

export const Home=()=>{

    const[open,setOpen]= useState(false)
    const openDbox=()=>{
        setOpen(true)
    }
    const closeDbox=()=>{
        setOpen(false)
    }
return(
    <>
    <Navbar />
    <Register open={open} closeDbox={closeDbox}/>
    <div style={{background:'#0F1010'}}>
    <Search/>
    <Banner />
    <Services/>
    <Footer/>
    </div>
    </>
)
}

export default Home