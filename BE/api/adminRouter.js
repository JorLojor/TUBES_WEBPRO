const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin/adminController');

router.get('/', adminController.getAllUser);
router.get('/:id', adminController.getUserById);
//penanam
router.get('/datapenanam/data', adminController.getAllPenanam);
//peminjam
router.get('/datapeminjam/data', adminController.getAllPeminjam);


module.exports = router;
