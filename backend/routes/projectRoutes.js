const express = require('express');
const { createProject, getProjects } = require('../controllers/projectController');
const protect = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/', protect, authorize(['Admin']), createProject);
router.get('/', protect, getProjects);

module.exports = router;
