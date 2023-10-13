const mongoose = require('mongoose');
const user = require('./user/userModels');
const penanam = require('./user/UserPenanamModal');
const peminjam = require('./user/UserPinjamModal');

const db = {
    user,
    penanam,
    peminjam
}

module.exports = db;
