const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gabriel:1235@cluster0.xgj6g.gcp.mongodb.net/project?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })


const project = new mongoose.Schema({
    title: {
        type: String,
        Type: String,
        required: true,
    },
    owner: {
        type: String,
        Type: String,
        required: true,
        unique: true,
    }

});

module.exports = mongoose.model("project", project);