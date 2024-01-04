const Project = require('../../models/FeaturedProject/Project'); 
const User = require('../../models/user/userModels');
const { uploadProjectImages } = require('../../middleware/fileUpload');
const db = require('../../models/index')
const PinjamModal = db.peminjam;
const PenanamModal = db.penanam;
const multer = require('multer');

exports.createProject = async (req, res) => {
    try {
        uploadProjectImages(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ success: false, message: err.message });
            }


            const { title, description, price } = req.body;
            const { id } = req.params; // id user

            const dataUser = await User.findById(id);
            if (!dataUser) {
                return res.status(404).json({ success: false, message: 'User tidak ditemukan' });
            }

            if (err) {
                return res.status(400).json({ success: false, message: err.message });
            }

            if (!title || !description || isNaN(price)) {
                return res.status(400).json({ success: false, message: 'Title, description, and valid price are required fields' });
            }

            // Periksa apakah req.files terdefinisi
            const images = req.files;
            if (!images) {
                return res.status(400).json({ success: false, message: 'No images uploaded' });
            }

            const imgArray = images.map((image) => image.filename);

            let total_pinjam;
            if (!isNaN(price)) {
                total_pinjam = price * 0.1;
            } else {
                total_pinjam = 0; // atau tindakan yang sesuai
            }

            const project = await Project.create({
                title: title,
                description: description,
                img: imgArray,
                price: price,
            });
            console.log("model project", project);

            //cek apakah field PinjamModal sudah terisi

            // jika belum ada PinjamModal
            if (!dataUser.PinjamModal) {
                console.log("belum ada PinjamModal");
                // buat user PinjamModal
                const UserPinjamModal = await PinjamModal.create({
                    total_pinjam: total_pinjam,
                    statusPinjam: "belumselesai",
                    project: project._id,
                });
                console.log("model UserPinjamModal", UserPinjamModal);
                dataUser.PinjamModal = UserPinjamModal._id;
                project.Owner = UserPinjamModal._id;

                await dataUser.save();
                await project.save();
                res.status(201).json({ success: true, project });

            }else{
                console.log("sudah ada PinjamModal");
                // jika sudah ada PinjamModal
                const dataUserPinjamModal = await PinjamModal.findById(dataUser.PinjamModal);
                if (!dataUserPinjamModal) {
                    return res.status(404).json({ success: false, message: 'User PinjamModal tidak ditemukan' });
                }
                dataUserPinjamModal.total_pinjam = dataUserPinjamModal.total_pinjam + total_pinjam;
                dataUserPinjamModal.project.push(project._id);
                project.Owner = dataUserPinjamModal._id;
                await dataUserPinjamModal.save();
                await project.save();
                res.status(201).json({ success: true, project });
            }
            
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};



// Controller untuk memodalkan proyek
exports.TanamModal = async (req, res) => {
    try {
        const { idUser, idProject } = req.params;
        const { uang_modal } = req.body;

        console.log("idUser", idUser);
        console.log("idProject", idProject);
        console.log("uang_modal", uang_modal);

        if (!idUser || !idProject) {
            return res.status(400).json({ success: false, message: 'idUser dan idProject harus terdefinisi' });
        }

        const dataUser = await User.findById(idUser);
        if (!dataUser) {
            return res.status(404).json({ success: false, message: 'User tidak ditemukan' });
        }

        console.log("dataUser: \n", dataUser);

        const dataProject = await Project.findById(idProject);
        if (!dataProject) {
            return res.status(404).json({ success: false, message: 'Project tidak ditemukan' });
        }

        console.log("dataProject: \n", dataProject);

        let uang_menetap = 0;

        if (uang_modal < dataProject.price) {
            return res.status(400).json({ success: false, message: 'Uang modal harus lebih besar dari harga proyek' });
        }

        uang_menetap = uang_modal - dataProject.price;

        if (!dataUser.TanamModal) {
            console.log("belum ada PenanamModal");
            const newPenanamModal = await PenanamModal.create({
                uang_menetap: uang_menetap,
                uang_modal: uang_modal,
                project: [dataProject._id], // Simpan ID proyek dalam array
            });

            console.log("model newPenanamModal", newPenanamModal);

            dataUser.TanamModal = newPenanamModal._id;
            dataProject.pemodal.push(newPenanamModal);

            await dataUser.save();
            await dataProject.save();

            console.log("saved new data");

            return res.status(201).json({ success: true, dataProject });
        } else {
            console.log("sudah ada PenanamModal");
            const dataUserTanamModal = await PenanamModal.findById(dataUser.TanamModal);
            if (!dataUserTanamModal) {
                return res.status(404).json({ success: false, message: 'User TanamModal tidak ditemukan' });
            }
            dataUserTanamModal.uang_menetap += uang_menetap;
            dataUserTanamModal.uang_modal += uang_modal;
            dataUserTanamModal.project.push(dataProject._id);
            dataProject.pemodal.push(dataUserTanamModal._id);
            await dataUserTanamModal.save();
            await dataProject.save();
            return res.status(200).json({ success: true, dataProject });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Controller untuk mendapatkan proyek yang dimodali dengan request id user

exports.getProjectsByPemodal = async (req, res) => {
    try {
        const { pemodalId } = req.params;

        // Validasi apakah pemodalId adalah format ObjectId yang valid
        if (!mongoose.Types.ObjectId.isValid(pemodalId)) {
            return res.status(400).json({ success: false, message: 'Invalid pemodalId format' });
        }

        // Cari user pemodal berdasarkan pemodalId
        const pemodal = await User.findById(pemodalId);
        if (!pemodal) {
            return res.status(404).json({ success: false, message: 'User pemodal not found' });
        }

        // Cari proyek yang memiliki pemodalId dalam array pemodal
        const projects = await Project.find({ pemodal: pemodalId });
        if (!projects || projects.length === 0) {
            return res.status(404).json({ success: false, message: 'No projects found for the specified pemodalId' });
        }

        res.status(200).json({ success: true, projects });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};


// Controller untuk mendapatkan proyek dengan id userPinjamModal dengan request id user
exports.getMyProject = async (req, res) => {
    try{
        const { idUser } = req.params;

        const dataUser = await User.findById(idUser).populate('PinjamModal')
        if (!dataUser) {
            return res.status(404).json({ success: false, message: 'User tidak ditemukan' });
        }

        const dataUserPinjamModal = await PinjamModal.findById(dataUser.PinjamModal).populate('project');
        if (!dataUserPinjamModal) {
            return res.status(404).json({ success: false, message: 'User PinjamModal tidak ditemukan' });
        }

        res.status(200).json({ success: true, dataUserPinjamModal });

    }catch(error){
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
