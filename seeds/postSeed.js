const { Post } = require('../models');

const blogPostContent = [
    {
        title: '',
        content: false,
        date_created: 1471856624000,
        user_id: 1,
    },
    {
        title: 'How About You?',
        content: 'Also nope',
        date_created: 1471875864000,
        user_id: 2,
    },
    {
        title: 'Bro, Do You Even MySQL',
        content: 'Of course I do, how dare you',
        date_created: 1471875974000,
        user_id: 3,
    },
];
const seedBlogPosts = () => Post.bulkCreate(blogPostData);
module.exports = seedBlogPosts;







