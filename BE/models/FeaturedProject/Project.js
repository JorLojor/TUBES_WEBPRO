const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: [{ type: String, required: true }],
    price : { type: Number, required: true },
    Owner: { type: mongoose.Schema.Types.ObjectId, ref: 'PinjamModal' },
    pemodal: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true, collection: 'projects'});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
