const { Comment} = require("../models");

const commentSeed =  [
    {
        id: '',
        user_id: '',
        date_created:'',
        description: '', 
    },
]


const seedComment = () => Comment.bulkCreate(comment-seed);

module.exports = seedComment;