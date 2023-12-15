const express = require('express');
const router = express.Router();
// router
const userRouter = require('./userRouter');
const adminRouter = require('./adminRouter');
const PenanamRouter = require('./penanamRouter');
const PeminjamRouter = require('./peminjamRouter');
const ProjectRouter = require('./ProjectRouter');



router.get('/', (req, res) => {
    res.send('----------- API -----------');
});

router.use('/users', userRouter);
router.use('/admin', adminRouter);
router.use('/penanam', PenanamRouter);
router.use('/peminjam', PeminjamRouter);
router.use('/project', ProjectRouter);


module.exports = router;
