const express = require('express');
const router = express.Router();
const userController = require('../controller/user/userController');

router.get('/users', userController.getAllUser);

module.exports = router;
