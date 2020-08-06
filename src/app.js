const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors')

const LogRequest = require('./middlewares/LogRequest')

mongoose.connect('mongodb+srv://gabriel:1235@cluster0.xgj6g.gcp.mongodb.net/project?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })



class App{
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(LogRequest.logRequests);
    }
    routes(){
        this.server.use(routes);
    }
}



module.exports = new App().server;