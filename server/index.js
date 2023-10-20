import express from 'express'
import Connection from './Database/db.js';
import Routes from './Routes/UserRoutes.js'


const app= express();
app.use('/',Routes)
const PORT= 8000;
Connection();
app.listen(PORT,()=>console.log(`Server is running on the port ${PORT}`))

