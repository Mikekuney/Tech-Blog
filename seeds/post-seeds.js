const { Post } = require('../models');

const postdata = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        post_url: 'https://www.google.com',
        user_id: 6
    },
    {
        title: 'Sed vel enim sit amet nunc viverra dapibus.',
        post_url: 'https://www.web3.com',
        user_id: 3
    },
    {
        title: 'Duis ac nibh.',
        post_url: 'https://www.amazon.com',
        user_id: 5
    },
    {
        title: 'Nulla facilisi.',
        post_url: 'https://www.google.com',
        user_id: 8
    },
    {
        title: 'Nulla facilisi.',
        post_url: 'https://www.appetite.com',
        user_id: 1
    },


];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;