const express = require('express');
const env = require('dotenv')

//load env variables 
env.config({path: './config/config.env'})

const app = express();
const port = process.env.PORT||5000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port} and environment is ${process.env.NODE_ENV}`)
})

//health check 
app.get('/health', (request, response) => {
    response.status(200).json({message: 'App is running', status: 'SUCCESS'});
});

//Route files
const bootcamps = require('./routes/bootcamps');
app.use('/api/v1/bootcamps', bootcamps);
