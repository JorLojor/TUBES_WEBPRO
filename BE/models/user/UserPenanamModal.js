const mongoose = require('mongoose');

const userPenanamModalSchema = new mongoose.Schema({
    uang_menetap: { type: Number, required: false },
    uang_modal: { type: Number, required: true, default: 0 },
    max_pinjam: { type: Number, required: false, default: 1000 },
    project : { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
}, { timestamps: true, collection: 'PenanamModal' });

const PenanamModal = mongoose.model('PenanamModal', userPenanamModalSchema);

module.exports = PenanamModal;
