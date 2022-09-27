const router = require('express').Router();
const {User, Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

// Get all posts
router.get("/", (req, rea) => {
    Post.findAll({
        attributes: ["id", "content", "title", "created_at"],
        order: [
            ["created_at", "DESC"]
        ],
        include: [{
            model: User,
            attributes: ['username'],
        },
        {
            model: Comment,
            attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
            include: {
                model: User,
                attributes: ["username"], 
            },
        },
    ],
  })
  .then((dbPostData) => res.json(dbPostData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.get("/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        }, 
        attributes: ["id", "content", "title", "created_at"],
        include: [{
            model:User, 
            attributes: ["username"],
        },
    })
})