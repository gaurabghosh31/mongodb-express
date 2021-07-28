//@desc get all bootcamps
//@route GET /api/v1/bootcamps
//@access public
exports.getAllBootcamps = (request, response, next)=>{
    response.status(200).json({message: 'List of all bootcamps', status: 'SUCCESS'});
}

//@desc get particular bootcamp by id
//@route GET /api/v1/bootcamps/id/:id
//@access public
exports.getBootcampById = (request, response, next)=>{
    response.status(200).json({message: `bootcamp ${request.params.id}`, status: 'SUCCESS'});
}

//@desc create new bootcamp
//@route POST /api/v1/bootcamps
//@access private
exports.createBootcamp = (request, response, next)=>{
    response.status(201).json({message: 'bootcamp created', status: 'SUCCESS'});
}

//@desc update a  bootcamp
//@route PUT /api/v1/bootcamps/id/:id
//@access private
exports.updateBootcamp = (request, response, next)=>{
    response.status(200).json({message: `bootcamp ${request.params.id} updated`, status: 'SUCCESS'});
}

//@desc delete a  bootcamp
//@route DELETE /api/v1/bootcamps/id/:id
//@access private
exports.deleteBootcamp = (request, response, next)=>{
    response.status(200).json({message: `bootcamp ${request.params.id} deleted`, status: 'SUCCESS'});
}