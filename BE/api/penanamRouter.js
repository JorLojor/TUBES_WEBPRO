const express = require('express');
const router = express.Router();
const userPenanamModal = require('../controller/user/PemodalController');

router.post('/addModal/:id', userPenanamModal.addModal);
// router.put('/withdraw/:id', userPenanamModal.withdraw);

module.exports = router;
