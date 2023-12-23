const express = require('express');
const router = express.Router();
// router
const userRouter = require('./userRouter');
const adminRouter = require('./adminRouter');
const ProjectRouter = require('./ProjectRouter');

router.get('/', (req, res) => {
    res.send('----------- API -----------');
});

router.use('/users', userRouter);
router.use('/admin', adminRouter);
router.use('/project', ProjectRouter);


module.exports = router;
