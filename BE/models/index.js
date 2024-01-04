const user = require('./user/userModels');
const penanam = require('./user/UserPenanamModal');
const peminjam = require('./user/UserPinjamModal');
const project = require('./FeaturedProject/Project');

const db = {
    user,
    penanam,
    peminjam,
    project
}

module.exports = db;
