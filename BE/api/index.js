const express = require('express');
const router = express.Router();
// router
const userRouter = require('./userRouter');
const ProjectRouter = require('./ProjectRouter');
const adminRouter = require('./adminRouter');

router.get('/', (req, res) => {
    res.send('----------- API -----------');
});

router.use('/users', userRouter);
router.use('/project', ProjectRouter);

router.use('/admin', adminRouter);


module.exports = router;
