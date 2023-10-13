const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: false, min: 18, max: 40 },
    email: { type: String, required: false, unique: true },
    role: { type: String, required: false, default: 'user' },
    statusUser: { type: String, required: false },
    phone: { type: String, required: false },
    tanam_modal: { type: mongoose.Schema.Types.ObjectId, ref: 'PenanamModal' },
    pinkam_modal: { type: mongoose.Schema.Types.ObjectId, ref: 'PeminjamModal' },
}, {timestamps: true, collection: 'users'});

const User = mongoose.model('User', userModel);
module.exports = User;
