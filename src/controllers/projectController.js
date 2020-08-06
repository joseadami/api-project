const Projects = require('../models/project')


class ProjectController {

    async index(req,res,next){
        try {
            const data = await Projects.find({});
            return res.json(data);
        } catch (error) {
            return res.status(400).send({ error: 'Does not exist projects'});
        };
        
    }
    async store(req, res) {
        try {
            const data = await Projects.create(req.body);
            return res.json(data);
        } catch (error) {
            return res.status(400).send({ error: 'User was not created'});
        };
    };
    async put(req,res,next) {
        try{
            const data = await Projects.findOneAndUpdate
            ({ _id: req.params.id}, req.body, {new: true} );
            
            if(data.n !== 0){
                return res.json(data)
            }
                return res.status(400)
        }catch (error) {
            return res.status(400).send({ error: 'Project not found!'});
        };
    }
    async delete(req,res,next) {
        try{
            const data = await Projects.deleteOne({
                _id: req.params.id
            })
            if(data.n !== 0){
                return res.json(data)
            }
                return res.status(400).json('sla')
        }catch (error) {
            return res.status(400).send({ error: 'Project not found!'});
        };
    }
    
}
module.exports =  new ProjectController;