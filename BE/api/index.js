const express = require('express');
const router = express.Router();
// router
const userRouter = require('./userRouter');



router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/users', userRouter);


module.exports = router;
