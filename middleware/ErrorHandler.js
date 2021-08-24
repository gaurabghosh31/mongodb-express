const ErrorResponse = require('../util/ErrorResponse');

const errorHandler = (err, request, response, next)=>{
    let error = { ...err };
    error.message = err.message;
  
    //handle error if no data found for wrong id
    if(err.name==='CastError'){
      const message = `Resource not found for id ${err.value}`;
      error = new ErrorResponse(404,message);
    }

    //if data already exists error; error code thrown by mongo is 11000
    if(err.code===11000){
      const message = 'Resource already exists';
      error = new ErrorResponse(400,message);
    }

    //input validation error
    if(err.name==='ValidationError'){
      const message = Object.values(err.errors).map(value => value.message);
      error = new ErrorResponse(400,message);
    }

    response.status(error.statusCode || 500).json({
       // success: false,
        status: 'FAILURE',
        error: error.message || 'Server Error'
      });
    };
//}
//status: 'FAILURE', 
module.exports = errorHandler;