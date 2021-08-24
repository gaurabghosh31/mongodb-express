const express = require('express');
const env = require('dotenv')
const morgan = require('morgan')



//load env variables 
env.config({path: './config/config.env'})

//start app
const app = express();
const port = process.env.PORT||5000;
const server = app.listen(port, ()=>{
    console.log(`Server running on port ${port} and environment is ${process.env.NODE_ENV}`)
})

//use body parser
app.use(express.json());

//handle unhandled promise rejections
process.on('unhandledRejection', (err,promise)=>{
    console.log(`Error : ${err.message}`);
    //stop server
    server.close(()=>{process.exit(1)});
});

//health check 
app.get('/health', (request, response) => {
    response.status(200).json({message: 'App is running', status: 'SUCCESS'});
});

//Route files
const bootcampRouts = require('./routes/BootcampRoutes');
app.use('/api/v1/bootcamps', bootcampRouts);

//error handler
const errorHandler = require('./middleware/ErrorHandler');
app.use(errorHandler);

//logger
//const logger = require('./middleware/logger');
if(process.env.NODE_ENV==='dev'){
    app.use(morgan('dev'))
}

//connect database
const connectDB = require('./config/db');
connectDB();



