const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const userPinjamModal = new Schema({
    total_pinjam:{ type: Number, required: true },
    statusPinjam:{ type: String, required: true }, // selesai // belumselesai
    penanam:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
})

module.exports = userPinjamModal;
