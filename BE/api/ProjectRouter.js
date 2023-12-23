const express = require('express');
const {createProject,getProjectsPagination,getProjectById,updateProject,deleteProject} = require('../controller/project/projectCOntroller');
const router = express.Router();

router.post('/:id', createProject);
router.get('/', getProjectsPagination);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;


