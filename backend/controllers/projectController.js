const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('members');
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
