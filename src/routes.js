const express = require('express');
const ProjectController = require('./controllers/projectController');
const { router } = require('./app');

const routes = express.Router();

function VerifyRequestId(req,res,next){
    if (!req.params.id) {
        return res.status(400).json({ error: 'Id incorrect'})
    }
    return next();
}

routes.get('/projects', ProjectController.index);

routes.post('/projects', ProjectController.store);

routes.put('/projects/:id',VerifyRequestId , ProjectController.put);

routes.delete('/projects/:id', VerifyRequestId,ProjectController.delete);

module.exports = routes;