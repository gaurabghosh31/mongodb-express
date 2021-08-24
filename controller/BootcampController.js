const Bootcamp = require('../models/BootcampModel');
const ErrorResponse = require('../util/ErrorResponse');
const AsyncHandler = require('../middleware/AsyncHandler');

//@desc get all bootcamps
//@route GET /api/v1/bootcamps
//@access public
exports.getAllBootcamps = AsyncHandler(async (request, response, next)=>{
        const bootcamp = await Bootcamp.find();
        response.status(200).json({status: 'SUCCESS', count: bootcamp.length, data: bootcamp});
        next(new ErrorResponse(404, 'Failed to fetch bootcamps'));
    })


//@desc get particular bootcamp by id
//@route GET /api/v1/bootcamps/id/:id
//@access public
exports.getBootcampById = AsyncHandler(async (request, response, next)=>{
        const bootcamp = await Bootcamp.findById(request.params.id);
        if(!bootcamp){
            next(new ErrorResponse(404, `Unable to fetch data for Bootcamp id ${request.params.id}`));
        }
        response.status(200).json({status: 'SUCCESS', data: bootcamp});
        next(err);
    })

//@desc create new bootcamp
//@route POST /api/v1/bootcamps
//@access private
exports.createBootcamp = AsyncHandler(async (request, response, next)=>{
        const bootcamp = await Bootcamp.create(request.body);
        response.status(201).json({status: 'SUCCESS', message: 'Bootcamp created successfully', data: request.body});
        next(err);
    })

//@desc update a  bootcamp
//@route PUT /api/v1/bootcamps/id/:id
//@access private
exports.updateBootcamp = AsyncHandler(async (request, response, next)=>{
    const bootcamp = await Bootcamp.findByIdAndUpdate(request.params.id, request.body, {
        new : true,
        runValidators: true
    });
        response.status(200).json({status: 'SUCCESS', message: `bootcamp ${request.params.id} updated successfully`, data: bootcamp});
        next(err);
    })

//dummy method using try catch
//@desc update a  bootcamp
//@route PUT /api/v1/bootcamps/id/:id
//@access private
// exports.updateBootcamp = async (request, response, next)=>{
//     try{
//     const bootcamp = await Bootcamp.findByIdAndUpdate(request.params.id, request.body, {
//         new : true,
//         runValidators: true
//     });
//     response.status(200).json({status: 'SUCCESS', message: `bootcamp ${request.params.id} updated successfully`, data: bootcamp});
//     }catch (err){
//       //  response.status(400).json({status: 'FAILURE', message: 'Failed to upate bootcamp', error: err.message})
//       next(err);
//     }
//     }

//@desc delete a  bootcamp
//@route DELETE /api/v1/bootcamps/id/:id
//@access private
exports.deleteBootcamp = AsyncHandler(async (request, response, next)=>{
        const bootcamp = await Bootcamp.findByIdAndDelete(request.params.id);
        response.status(200).json({ status: 'SUCCESS', message: `bootcamp ${request.params.id} deleted successfully`});
        next(err);
    })
    