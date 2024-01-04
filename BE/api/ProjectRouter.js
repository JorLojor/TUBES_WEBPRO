const express = require('express');
const {createProject,getProjectsPagination,getProjectById,updateProject,deleteProject,TanamModal,getMyProject} = require('../controller/project/projectCOntroller');
const router = express.Router();

router.post('/create/:id', createProject); 
router.get('/', getProjectsPagination);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.post('/tanammodal/:idUser/:idProject', TanamModal);
router.get('/myproject/:idUser', getMyProject); //http://localhost:3000/api/project/myproject/60b9b0b9e9b9c71f1c8b0b1f

module.exports = router;
