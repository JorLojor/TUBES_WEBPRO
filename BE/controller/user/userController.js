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
        // .populate('tanam_modal')
        // .populate('pinjam_modal')
        .exec();
        const dataResponse = {
            dataUser: dataUser,
            total_page: total_page,
            page: page,
            limit: limit
        }

        responseSuccess(res,dataResponse,200,"Success get all user !")
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

exports.registerUser = async (req, res) => {
    try{
        const {name,password,age,email,role} = req.body;
        const cekUser = await db.user.findOne({
            $or:[{'email': email}, {'name': name}]
        });
        if(cekUser){
            responseError(res, 400, 'Email atau name sudah ada ! \t\n', 'masukkan email atau name lain \t\n');
            return ;
        }
        const HashPassword = await bcrypt.hash(password, 10);
        const dataUser = await db.user.create({
            name: name,
            password: HashPassword,
            age: age,
            email: email,
        });
        responseSuccess(res, 200, 'Success register user ! \t\n', dataUser)
    }catch(error){
        responseError(res, 500, 'Internal server error ! \t\n', error.message)
    }
}

exports.loginUser = async (req, res) => {
    try{
        const {name,password} = req.body;
        const dataUser = await db.user.findOne({name: name});
        if(!dataUser){
            responseError(res, 400, 'User tidak ditemukan ! \t\n', 'masukkan name yang benar \t\n');
            return ;
        }
        const cekPassword = await bcrypt.compare(password, dataUser.password);
        if(!cekPassword){
            responseError(res, 400, 'Password salah ! \t\n', 'masukkan password yang benar \t\n');
            return ;
        }
        const token = jwt.sign({id: dataUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        responseSuccess(res, 200, 'Success login user ! \t\n', {token: token})
    }catch(error){
        responseError(res, 500, 'Internal server error ! \t\n', error.message)
    }
}
module.exports = exports;
