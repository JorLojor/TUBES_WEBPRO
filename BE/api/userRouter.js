const express = require('express');
const router = express.Router();
const userController = require('../controller/user/userController');

router.get('/name/:name', userController.getUserByName);
router.get('/', userController.getAllUser);
router.get('/:id', userController.getUserById);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);



module.exports = router;
