const router = require('express').Router();
const {User, Project} = require('../models/index');

router.get('/', async (req, res) => {
    try{
        const projectData = await Project.findAll;
        const projects = projectData.map((project) => {
            project.get({plain: true});
        })
        res.render("homepage", {projects})
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router