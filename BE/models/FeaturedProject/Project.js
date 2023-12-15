const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price : { type: Number, required: true },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
