const { Comment} = require("../models");

const commentSeed =  [
    {
        id: '1',
        user_id: 'HMFIC',
        date_created:'',
        description: '', 
    },
]


const seedComment = () => Comment.bulkCreate(comment-seed);

module.exports = seedComment;