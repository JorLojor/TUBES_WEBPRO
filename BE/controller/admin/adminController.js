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

exports.getAllPenanam = async (req, res) => {
    
}


module.exports = exports;
