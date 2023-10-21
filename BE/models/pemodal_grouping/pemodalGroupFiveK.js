const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaUser = require('../user/userModels');

const SchemaPeminjamGroupFiveK = new Schema({
    nama: { type: String, required: true, default: 'User dengan max peminjaman 80.000' },
    Pemodal_active:[{ type: Schema.Types.ObjectId, ref: 'User' }],  
    Peminjam:[{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {timestamps: true});

const PeminjamGroupFiveK = mongoose.model('PeminjamGroupFiveK', SchemaPeminjamGroupFiveK);

module.exports = PeminjamGroupFiveK;
