const mongoose = require('mongoose');
const SchemaPenanamModal = require('./UserPenanamModal');
const SchemaPinjamModal = require('./UserPinjamModal');
const Schema = mongoose.Schema;

const userModel = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: false, min: 18, max: 40 },
    email: { type: String, required: false, unique: true },
    role: { type: String, required: false, default: 'user' }, // user, penanam, peminjam
    statusUser: { type: String, required: false },
    phone: { type: String, required: false },
    tanam_modal: SchemaPenanamModal,
    pinjam_modal: SchemaPinjamModal,
    token: [String],
}, {timestamps: true, collection: 'users'});

const User = mongoose.model('User', userModel);

module.exports = User;
