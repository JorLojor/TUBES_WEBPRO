const Project = require('../../models/FeaturedProject/Project'); 
const User = require('../../models/user/userModels');
const { uploadProjectImages } = require('../../middleware/fileUpload');
const db = require('../../models/index')
const PinjamModal = db.peminjam;


exports.createProject = async (req, res) => {
    try {
        uploadProjectImages(req, res, async function (err) {
            const { title, description, price } = req.body;
            const { id } = req.params; // id user

            const dataPinjamModal = await User.findById(id);
            if (!dataPinjamModal) {
                return res.status(404).json({ success: false, message: 'User tidak ditemukan' });
            }

            if (err) {
                return res.status(400).json({ success: false, message: err.message });
            }

            if (!title || !description || !price) {
                return res.status(400).json({ success: false, message: 'Title, description, and price are required fields' });
            }

            // Periksa apakah req.files terdefinisi
            const images = req.files;
            if (!images) {
                return res.status(400).json({ success: false, message: 'No images uploaded' });
            }

            const imgArray = images.map((image) => image.filename);




            const project = new Project({
                title: title,
                description: description,
                img: imgArray,
                price: price,
            });

            let total_pinjam = price * 0.1;

            const UserPinjamModal = new PinjamModal({
                total_pinjam: total_pinjam,
                statusPinjam: "belumselesai",
                project: project._id,
            });

            dataPinjamModal.PinjamModal = UserPinjamModal._id;
            project.Owner = UserPinjamModal._id;

            
            await UserPinjamModal.save();
            await dataPinjamModal.save();
            await project.save();
            res.status(201).json({ success: true, project });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};




// Controller untuk mendapatkan proyek dengan paginasi
exports.getProjectsPagination = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const projects = await Project.find().skip(skip).limit(limit).sort({ createdAt: -1 });

    
        const count = await Project.countDocuments();
        const totalPages = Math.ceil(count / limit);

        res.json({ success: true, projects, totalPages });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Controller untuk mendapatkan proyek berdasarkan ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ success: false, message: 'Proyek tidak ditemukan' });
        }

        res.json({ success: true, project });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Controller untuk memperbarui proyek berdasarkan ID
exports.updateProject = async (req, res) => {
    try {
        const { title, description, price } = req.body;
        if (req.file) {
            const img = req.file.filename;
            req.body.img = img;
        }

        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            { title, description, price, img: req.body.img },
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ success: false, message: 'Proyek tidak ditemukan' });
        }

        res.json({ success: true, project: updatedProject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Controller untuk menghapus proyek berdasarkan ID
exports.deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject) {
            return res.status(404).json({ success: false, message: 'Proyek tidak ditemukan' });
        }

        res.json({ success: true, message: 'Proyek berhasil dihapus', project: deletedProject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = exports;   
