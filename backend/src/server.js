const express =require('express');
const dotenv = require('dotenv').config();
const dbConnect=require('./config/dbConnect');


const app=express();
dbConnect();


//middleware
app.use(express.json());

//routes
const PORT=process.env.PORT || 7000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})