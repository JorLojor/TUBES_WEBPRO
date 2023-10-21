db = require ('../../models/index')
const responseSuccess = require('../../res/responseSucces')
const responseError = require('../../res/responseError');
const { user } = require('../../models/index');

exports.calculatePinjaman = async (req, res) => {
    try {
        const IdUser = req.params.id;
        let  uang_pinjaman  = req.body.uang_pinjaman;
        let Uang_dipinjam = 0;
        const yangMeminjam = await db.user.findById(IdUser); //user yang meminjam

        if (!yangMeminjam) {
            responseError(res, 'Peminjam tidak ditemukan.', 404);
            return;
        }

        const query = {
            'tanam_modal': { $exists: true }
        };
        const DataUserTanamModal = await db.user.find(query); //user yang memberi pinjaman
        for (let i = 0; i < DataUserTanamModal.length; i++) {
            const UserTanamModalData = DataUserTanamModal[i];
                if(UserTanamModalData.tanam_modal.uang_modal >= uang_pinjaman && UserTanamModalData.tanam_modal.uang_modal !== 0 && uang_pinjaman !== 0){
        
                    Uang_dipinjam += UserTanamModalData.tanam_modal.max_pinjam;
                    await db.user.findByIdAndUpdate(yangMeminjam._id,{
                        $push:{
                            'pinjam_modal.penanam': UserTanamModalData._id
                        },
                        $set:{
                            'pinjam_modal.total_pinjam': yangMeminjam.pinjam_modal.total_pinjam + UserTanamModalData.tanam_modal.max_pinjam
                        }
                    })
                    uang_pinjaman -= UserTanamModalData.tanam_modal.max_pinjam;
                    console.log("----------------------------------");
                    console.log(yangMeminjam, "meminjam dari \n ", UserTanamModalData);
                    console.log(uang_pinjaman)
                    console.log(Uang_dipinjam)
                    console.log("----------------------------------");
                    
                    await db.user.findByIdAndUpdate(UserTanamModalData._id,{
                        $set:{
                            'tanam_modal.uang_modal': UserTanamModalData.tanam_modal.uang_modal - UserTanamModalData.tanam_modal.max_pinjam,
                        },
                        $push:{
                            'tanam_modal.yangMeminjam': yangMeminjam._id
                        }
                    });
                }
                
                responseSuccess(res, yangMeminjam, 200, "Success calculate pinjaman!");
        }
    } catch (error) {
        responseError(res, error);
    }
};

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


exports.getAllPinjaman = async (req, res) => {};

exports.getPinjamanById = async (req, res) => {};

exports.deletePinjaman = async (req, res) => {};




                // const PeminjamCalculated = db.user.findByIdAndUpdate(Peminjam._id,{
                //     $set:{
                //         uang_modal: uang_modal - max_pinjam,
                //         // memsaukkan peminjam ke array peminjam
                //         peminjam: push(yangMeminjam._id)
                //     }
                // });
                // PeminjamCalculated.tanam_modal.uang_modal -= uang_pinjaman;



module.exports = exports;



 // const UserWithTanamModal = [];

        // for (const User of DataUserTanamModal) {
        //     if (User.tanam_modal.uang_modal >= uang_pinjaman && User.tanam_modal.uang_modal !== 0) {
        //         Uang_dipinjam += User.tanam_modal.max_pinjam;
        //         uang_pinjaman -= User.tanam_modal.max_pinjam;

        //         User.tanam_modal.uang_modal -= User.tanam_modal.max_pinjam;
        //         User.tanam_modal.peminjam.push(yangMeminjam._id);

        //         // Simpan perubahan pada User penanam
        //         await User.save();

        //         // Update peminjam dengan total_pinjaman dan penanam
        //         yangMeminjam.pinjam_modal.total_pinjaman += Uang_dipinjam;
        //         yangMeminjam.pinjam_modal.penanam.push(User._id);

        //         // Simpan perubahan pada yangMeminjam
        //         await yangMeminjam.save();
        //     }
        // }

        // responseSuccess(res, null, 200, "Success calculate pinjaman!");
