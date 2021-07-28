const express = require('express');
const router = express.Router();

//get all bootcamps
router.get('/', (request, response) => {
    response.status(200).json({message: 'List of all bootcamps', status: 'SUCCESS'});
});

//get bootcamp by id
router.get('/id/:id', (request, response) => {
    response.status(200).json({message: `bootcamp ${request.params.id}`, status: 'SUCCESS'});
});

//create new bootcamp
router.post('/', (request, response) => {
    response.status(201).json({message: 'bootcamp created', status: 'SUCCESS'});
});

//update bootcamp
router.put('/id/:id', (request, response) => {
    response.status(200).json({message: `bootcamp ${request.params.id} updated`, status: 'SUCCESS'});
});

//delete bootcamp
router.delete('/id/:id', (request, response) => {
    response.status(200).json({message: `bootcamp ${request.params.id} deleted`, status: 'SUCCESS'});
});

module.exports = router;