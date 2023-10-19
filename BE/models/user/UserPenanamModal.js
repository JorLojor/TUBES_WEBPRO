const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userPenanamModal = new Schema({
    uang_menetap:{ type: Number, required: false },
    uang_modal:{ type: Number, required: true  ,default: 0},
    max_pinjam:{ type: Number, required: false ,default: 1000},
    peminjam:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
})

module.exports = userPenanamModal;
