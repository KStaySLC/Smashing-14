const databaseConnection = require('../connection/connection');
const {
    User, 
    Post,
    Comment
} = require('../models');

const users = [
    {
        username: 'JohnD',
        password: 'password1234'
    },
    {
        username: 'KevinS',
        password: 'password1234'
    },
    {
        username: 'TechGuyUT',
        password: 'password1234'
    },
    {
        username: 'Nope',
        password: 'password1234'
    },
    {
        username: 'GandalfTheCoding',
        password: 'password1234'
    },
];
const posts = [
    {
        title: 'posting things',
        content: 'words and stuff and shit',
        user_id: 3
    },
    {
        title: 'APIs are the worst',
        content: 'intellectual vomit',
        user_id: 2
    },
    {
        title: 'Missing pants',
        content: 'Damn bedroom gnomes',
        user_id: 1
    },
    {
        title: 'Coding Bootcamp',
        content: 'Seemed like a good idea at the time',
        user_id: 4
    },
] ;

const comments = [
    {
        content: 'This is a comment',
        user_id: 3
    },
    {
        content: 'I should have gone to college',
        user_id: 2
    },
    {
        content: 'WTF',
        user_id: 1
    },
];

(async () => {
    await User.bulkCreate(users);
    await Post.bulkCreate(posts);
    await Comment.bulkCreate(comments);
})();