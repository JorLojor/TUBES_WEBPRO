const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin/adminController');

router.get('/', adminController.getAllUser);
router.get('/:id', adminController.getUserById);

module.exports = router;
