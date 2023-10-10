const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userPenanamModal = new Schema({
    uang_modal:{ type: Number, required: true },
    max_pinjam:{ type: Number, required: true },
    peminjam:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
})


module.exports = userPenanamModal;
