const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin/adminController');

router.get('/', adminController.getAllUser);
router.get('/:id', adminController.getUserById);
//penanam
router.get('/datapenanam/data', adminController.getAllPenanam);
//peminjam
router.get('/datapeminjam/data', adminController.getAllPeminjam);


router.delete('/clear-all', adminController.deleteAlldata); // http://localhost:3000/api/admin/clear-all

module.exports = router;
