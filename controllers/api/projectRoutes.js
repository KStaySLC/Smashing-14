const router = require('express').Router();
const { Project } = require('../../models');


const { User, Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

//Posting a comment 
router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Deleting a comment 
router.delete('/:id', async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Getting a comment 
router.get("/", (req, res) => {
  Comment.findAll().then((dbCommentData) => res.json(dbCommentData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err)
  });
});

module.exports = router;
