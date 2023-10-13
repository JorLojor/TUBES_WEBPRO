const db = require('../../models/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const responseSuccess = require('../../res/responseSucces')
const responseError = require('../../res/responseError')

exports.getAllUser = async (req, res) => {
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const total_user = await db.user.countDocuments();
        const total_page = Math.ceil(total_user/limit);
        const offset = (page-1)*limit;

        const dataUser = await db.user.find()
        .skip(offset)
        .limit(limit)
        // .populate('tanam_modal')
        // .populate('pinjam_modal')
        .exec();

        responseSuccess(res, 200, 'Success get all user ! \t\n', dataUser, {total_user, total_page, page})
    }catch(error){
        responseError(res, 500, 'Internal server error ! \t\n', error.message)
    }
}

exports.getUserById = async (req, res) => {}


module.exports = exports;
