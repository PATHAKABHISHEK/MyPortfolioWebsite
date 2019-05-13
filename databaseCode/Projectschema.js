const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    project_image_url : {
        type: String,
        required:true
    },
    project_description: {
        type: String,
        required:true
    },
    project_url:{
        type:String,
        required:true
    }
});

const Project = mongoose.models('project', projectSchema);

module.exports = Project;