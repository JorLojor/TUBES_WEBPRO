const express = require('express');
const router = express.Router();
const userPinjamModal = require('../controller/user/peMinjamController');

router.post('/addPinjam/:id', userPinjamModal.pinjamUang);

module.exports = router;
