const express = require('express');
const router = express.Router();
const userController = require('../controller/user/userController');

router.get('/', userController.getAllUser);
router.post('/register', userController.registerUser);

module.exports = router;
