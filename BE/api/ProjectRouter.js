const express = require('express');
const {createProject,getProjectsPagination,getProjectById,updateProject,deleteProject,TanamModal} = require('../controller/project/projectCOntroller');
const router = express.Router();

router.post('/:id', createProject); // h
router.get('/', getProjectsPagination);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.post('/tanammodal/:idUser/:idProject', TanamModal);

module.exports = router;
