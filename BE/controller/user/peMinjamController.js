db = require ('../../models/index')
const responseSuccess = require('../../res/responseSucces')
const responseError = require('../../res/responseError');
const { user } = require('../../models/index');

exports.pinjamUang = async (req, res) => {
    try {
        const userId = req.params.id;
        const uangPinjaman = req.body.uang_pinjaman;
        let totalPinjaman = 0;
        const peminjam = await db.user.findById(userId);

        if (!peminjam) {
            responseError(res, 'Peminjam tidak ditemukan.', 404);
            return;
        }

        // Ambil semua user penanam yang memiliki modal
        const penanamModalUsers = await db.user.find({ 'tanam_modal.uang_modal': { $gt: 0 } }); 

        // Looping untuk meminjam uang dari user penanam
        for (const penanam of penanamModalUsers) {
            if (totalPinjaman >= uangPinjaman) {
                break; // Jika uangPinjaman sudah mencapai batas, hentikan looping
            }

            const uangModalPenanam = penanam.tanam_modal.uang_modal;
            const maxPinjamanPenanam = penanam.tanam_modal.max_pinjam;

            if (uangModalPenanam >= maxPinjamanPenanam) {
                // Jika penanam memiliki modal yang cukup
                const pinjaman = Math.min(maxPinjamanPenanam, uangPinjaman - totalPinjaman);

                // Kurangi uang modal penanam dan tambahkan pinjam ke peminjam
                penanam.tanam_modal.uang_modal -= pinjaman;
                penanam.tanam_modal.yangMeminjam.push(peminjam._id);

                // Tambahkan pinjaman ke peminjam
                peminjam.pinjam_modal.total_pinjam += pinjaman;
                peminjam.pinjam_modal.penanam.push(penanam._id);

                // Tambahkan statusPinjam ke peminjam
                peminjam.pinjam_modal.statusPinjam = 'belumselesai';

                // Update kedua user
                await penanam.save();
                await peminjam.save();

                totalPinjaman += pinjaman;
            }
        }

        responseSuccess(res, 'Peminjaman sukses', 200);
    } catch (error) {
        responseError(res, error);
    }
};


module.exports = exports;
