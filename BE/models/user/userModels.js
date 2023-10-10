const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    name:{ type: String, required: true },
    password:{ type: String, required: true },
    age:{type: Number, required: true, min: 18, max: 40},
    email:{ type: String, required: true },
    role:{ type: String, required: true }, // user admin
    statusUser:{ type: String, required: true }, //pemodal //peminjam
    phone:{ type: String, required: true },
    tanam_modal:{type:mongoose.Schema.Types.ObjectId, ref:'PenanamModal'},
    pinkam_modal:{type:mongoose.Schema.Types.ObjectId, ref:'PeminjamModal'},
}, {timestamps: true},{collection: 'users'},{unique: true});

const User = mongoose.model('User', userModel);
module.exports = User;
