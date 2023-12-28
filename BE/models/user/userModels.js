const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    age: { type: Number, required: false, min: 18, max: 40 },
    role: { type: String, required: false, default: 'user' }, // user, penanam, peminjam
    phone: { type: String, required: false },
    address: { type: String, required: false },
    TanamModal: { type: mongoose.Schema.Types.ObjectId, ref: 'PenanamModal' },
    PinjamModal: { type: mongoose.Schema.Types.ObjectId, ref: 'PinjamModal' },
    token: [String],
}, {timestamps: true, collection: 'users'});

const User = mongoose.model('User', userModel);

module.exports = User;
