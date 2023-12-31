const mongoose = require('mongoose');

const userPinjamModalSchema = new mongoose.Schema({
    total_pinjam: { type: Number, required: true, default: 0 },
    statusPinjam: { type: String, required: false, default: "none" }, // selesai // belumselesai
    project: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
}, { timestamps: true, collection: 'PinjamModal' });

const PinjamModal = mongoose.model('PinjamModal', userPinjamModalSchema);

module.exports = PinjamModal;
