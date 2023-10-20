import axios from 'axios'
const URL = "http://localhost:8000";
export const AddUser= async()=>{
    try {
        axios.post(`${URL}/AddUser`)
    } catch (error) {
        console.log('error while calling the Add user API',error)
        
    }
}