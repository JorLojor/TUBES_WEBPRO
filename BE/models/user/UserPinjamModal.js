const mongoose = require('mongoose');

const userPinjamModal = {
    total_pinjam:{ type: Number, required: true, default: 0},
    statusPinjam:{ type: String, required: true, default: "belumselesai" }, // selesai // belumselesai
    penanam:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
}

module.exports = userPinjamModal;
