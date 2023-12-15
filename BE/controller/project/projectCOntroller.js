const Project = require('../../models/FeaturedProject/Project'); 
const { uploadProjectImage } = require('../../middleware/fileUpload');

exports.createProject = async (req, res) => {
    try {
        uploadProjectImage(req, res, async function (err) {
            const { title, description, price } = req.body;
            if (err) {
                return res.status(400).json({ success: false, message: err.message });
            }
            if (!title || !description || !price) {
                return res.status(400).json({ success: false, message: 'Title, description, and price are required fields' });
            }

            const img = req.file ? req.file.filename : undefined;
            const project = new Project({ title, description, img, price });
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

        // Memanggil middleware uploadProjectImage untuk menangani unggahan gambar
        uploadProjectImage(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ success: false, message: err.message });
            }

            // Jika unggahan gambar berhasil, ekstrak nama file dari req.file
            const img = req.file.filename;

            const updatedProject = await Project.findByIdAndUpdate(
                req.params.id,
                { title, description, img, price },
                { new: true }
            );

            if (!updatedProject) {
                return res.status(404).json({ success: false, message: 'Proyek tidak ditemukan' });
            }

            res.json({ success: true, project: updatedProject });
        });
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
