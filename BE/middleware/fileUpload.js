const multer = require('multer');
const path = require('path');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../Upload'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    },
});

const imageFilter = function (req, file, cb) {
    // hanya file gambar PNG atau JPEG
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(new Error('Hanya diperbolehkan mengunggah file gambar PNG atau JPEG!'), false);
    }
};

const uploadProjectImage = multer({
    storage: storage,
    fileFilter: imageFilter,
}).single('img');

module.exports = { uploadProjectImage };
