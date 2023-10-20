
import {SearchBox,Container} from './styles'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";


const defaultInput='';
export const Search= ()=>{
    const[input,setInput]=useState(defaultInput)
    const handleClear=()=>{
         setInput(defaultInput);
    }
   const handleChange=(e)=>{
    setInput(e.target.value)
    
   } 

    return(
        <SearchBox>
            <Container><input type="text" name='search' placeholder="Search doctors, clinics,hospitals etc." value={input} onChange={(e)=>handleChange(e)} />&nbsp;<ClearIcon onClick={handleClear}/>&nbsp;<SearchIcon/></Container>
        </SearchBox>
    )

}

export default Search