const db = require('../../models/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const responseSuccess = require('../../res/responseSucces')
const responseError = require('../../res/responseError')

exports.getAllUser = async (req, res) => {
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const total_user = await db.user.find().limit(1000).maxTimeMS(5000).countDocuments();
        const total_page = Math.ceil(total_user/limit);
        const offset = (page-1)*limit;

        const dataUser = await db.user.find()
        .skip(offset)
        .limit(limit)
        .exec();

        const data = {
            dataUser,
            total_user,
            total_page,
            page,
            limit,
        }

        responseSuccess(res,data,200,"Success get all user !")
    }catch(error){
        responseError(res,error)
    }
}

exports.getUserById = async (req, res) => {
    try{
        const userId = req.params.id;
        const dataUser = await db.user.findById(userId);
        responseSuccess(res,dataUser,200,"Success get user by id !")
    }catch(error){
        responseError(res,error)
    }
}
//peminjam uang

exports.getAllPeminjam = async (req, res) => {
    try{
        const page = parseInt(req.query.page) || 1;
        const limit  = parseInt(req.query.limit) || 10;
        // menghitung user yang belum selesai mwmbayar pinjaman
        const total_peminjam = await db.user.find().where({'pinjam_modal.statusPinjam':'belumselesai'}).sort({createdAt:-1}).skip(0).limit(1000).maxTimeMS(5000)
        .limit(1000).maxTimeMS(5000)
        .countDocuments();
        //menghitung total page
        const total_page = Math.ceil(total_peminjam/limit);
        //menghitung offset
        const offset = (page-1)*limit;
        //mengambil data user yang belum selesai membayar pinjaman
        const data_user = await db.user.find().where({'role':'user'}).sort({createdAt:-1})
        .skip(offset)
        .limit(limit)
        .exec();
    
        //mengformat data
        const data = {
            data_user,
            total_peminjam,
            total_page,
            page,
            limit,
        }
        console.log(data)
        responseSuccess(res,data,200,"Success get all peminjam !")
    }catch(error){
        responseError(res,error)
    }
};

exports.getPeminjamById = async (req, res) => {
    try{
        const userId = req.params.id;
        const dataUser = await db.user.findById(userId,{'pinjam_modal.statusPinjam':'belumselesai'});
        responseSuccess(res,dataUser,200,"Success get pinjaman by id !")
    }catch(error){
        responseError(res,error)
    }
};

//pemberi modal
exports.getAllPenanam = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const total_user = await db.user.find({
            "tanam_modal.uang_modal": { $gt: 0 } // Mengambil pengguna dengan "uang_modal" yang lebih besar dari 0
        }).limit(1000).maxTimeMS(5000).countDocuments();
        const total_page = Math.ceil(total_user / limit);
        const offset = (page - 1) * limit;

        const dataUser = await db.user.find({
            "tanam_modal.uang_modal": { $gt: 0 } // Mengambil pengguna dengan "uang_modal" yang lebih besar dari 0
        })
            .skip(offset)
            .limit(limit)
            .exec();

        const data = {
            dataUser,
            total_user,
            total_page,
            page,
            limit,
        }

        responseSuccess(res, data, 200, "Success get users with 'uang_modal'!");
    } catch (error) {
        responseError(res, error);
    }
}


exports.deleteAlldata = async (req,res)=>{
    try{
        // menghapus semua data user
        const user = await db.user.deleteMany(); 
        // menghapus semua data project
        const project = await db.project.deleteMany();
        // menghapus semua data modal
        const modal = await db.peminjam.deleteMany();
        // menghapus semua data tanam modal
        const tanamModal = await db.penanam.deleteMany();

        const data = {
            user,
            project,
            modal,
            tanamModal
        }

        responseSuccess(res,data,200,"Success delete all data !")

    }catch(error){
        responseError(res,error)
    }
}

module.exports = exports;
