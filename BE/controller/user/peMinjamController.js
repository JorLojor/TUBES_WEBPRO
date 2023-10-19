db = require ('../../models/index')
const responseSuccess = require('../../res/responseSucces')
const responseError = require('../../res/responseError');
const { user, penanam } = require('../../models/index');

exports.calculatePinjaman = async (req, res) => {
    


    // cari peminjam
    
    try{
        const IdUser = req.params.id;
        const {uang_pinjaman} = req.body; // 100000 
        const Uang_dipinjam = 0;
        // cari yang meminjam
        const yangMeminjam = await db.user.findById(IdUser); //rey

        const query = {
            'tanam_modal': { $exists: true }
        };
        const UserWithTanamModal = [];// array of userPeminjam
        const DataUserTanamModal = await db.user.find(query); // udah dapet data yang punya modal
        DataUserTanamModal.forEach(User => {
            UserWithTanamModal.push(User);
        });
        UserWithTanamModal.forEach(User => {
            // User adalah yang punya modal
            if(User.tanam_modal.uang_modal >= uang_pinjaman && User.tanam_modal.uang_modal != 0 ){
                //kita hasur membatasi sistem agar tidak terjadi pinjaman yang berlebihan dari user yang menanam modal
                Uang_dipinjam += User.tanam_modal.max_pinjam;
                uang_pinjaman -= User.tanam_modal.max_pinjam;

                // uang_modal yang ada di user harus berkurang sesuai dengan max_pinjam
                User.tanam_modal.uang_modal -= User.tanam_modal.max_pinjam;
                // memsaukkan peminjam ke array yangMeminjam
                User.tanam_modal.yangMeminjam.push(yangMeminjam._id);
                // update user penanam dimana uang_modal berkurang dan yangMeminjam bertambah
                const UpdatePenanam = db.user.findByIdAndUpdate(User._id,{
                    $set:{
                        uang_modal: User.tanam_modal.uang_modal,
                        yangMeminjam: User.tanam_modal.yangMeminjam
                    }
                },{new:true}).then(data => {
                    console.log(data);
                }).catch(err => {
                    console.log(err);
                });
                
                // update user peminjam dimana total_pinjaman bertambah dan menambahkan id penanam ke array penanam
                const UpdatePeminjam = db.user.findByIdAndUpdate(yangMeminjam._id,{
                    $set:{
                        pinjam_modal:{
                            total_pinjaman: Uang_dipinjam,
                            penanam: push(User._id)
                        }
                    }
                },{new:true}).then(data => {
                    console.log(data);
                }).catch(err => {
                    console.log(err);
                })
            }

        })
        // console.log(UserWithTanamModal);



        // const DataUserTanamModal = await db.user.find(query); // udah dapet data yang punya modal
        // //peminjam =  yang ngasih pinjaman
        // DataUserTanamModal.forEach(Peminjam => {
        //     if(Peminjam.tanam_modal.uang_modal >= uang_pinjaman && Peminjam.tanam_modal.uang_modal != 0 ){
        //         //kita hasur membatasi sistem agar tidak terjadi pinjaman yang berlebihan dari user yang menanam modal
        //         const uang_modal = Peminjam.tanam_modal.uang_modal;
        //         const max_pinjam = Peminjam.tanam_modal.max_pinjam;
                

        //         const UangDipinjam = 0; //define uang di pinjem yang nanti akan di 
        //         if(uang_pinjaman != 0){     
        //             const PeminjamCalculated = db.user.findByIdAndUpdate(Peminjam._id,{
        //                 $set:{
        //                     uang_modal: uang_modal - max_pinjam,
        //                     // memsaukkan peminjam ke array peminjam
        //                     peminjam: push(yangMeminjam._id)
        //                 }
        //             });
        //             UserWithTanamModal.push(PeminjamCalculated);
        //             uang_pinjaman -= PeminjamCalculated.tanam_modal.max_pinjam;
        //             UangDipinjam += PeminjamCalculated.tanam_modal.max_pinjam;
        //         }

    
    
        //     }
        // });

    }catch(error){
        responseError(res,error)
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
