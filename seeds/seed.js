const sequelize = require('../config/connection');
const { User, Project, Comment } = require('../models');

const userInfo = require('/userInfo.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    const users = await User.bulkCreate(userInfo, {
        individualHooks: true,
        returning: true,
    });

    for (const projct of userInfo) {
        await Project.create({
            ...Project,
            user_id: users[Math.floor(Math.random() * users.length)].id,

        });
    }

    process.exit(0);
};

seedDatabase();

// const sequelize = require('../config/connection');
// const seedBlogPost = require('./blogpost-seeds');
// const seedComment = require('./comment-seeds');
// const seedUser = require('./user-seeds');
// //From MVC mini project
// const seedDatabase = async () => {
//     await sequelize.sync({ force: true });
//     await seedBlogPost();
//     await seedComment();
//     await seedUser();
//     process.exit(0);
//   };
//   seedDatabase();