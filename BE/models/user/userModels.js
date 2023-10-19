const mongoose = require('mongoose');
const SchemaPenanamModal = require('./UserPenanamModal')
const Schema = mongoose.Schema;

const userModel = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true, min: 18, max: 40 },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: false, default: 'user' }, // user, admin, penanam, peminjam
    statusUser: { type: String, required: false },
    phone: { type: String, required: false },
    tanam_modal: SchemaPenanamModal,
    pinjam_modal: { type: mongoose.Schema.Types.ObjectId, ref: 'PeminjamModal' },
}, {timestamps: true, collection: 'users'});

const User = mongoose.model('User', userModel);
module.exports = User;
