const { Comment } = require('../models');

const commentdata = [
    {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
    },
    {
    comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 3,
    post_id: 8
    },
    {
    comment_text: 'Duis ac nibh.',
    user_id: 5,
    post_id: 7
    },
    {
    comment_text: 'Nulla facilisi.',
    user_id: 5,
    post_id: 4
    },
    {
    comment_text: 'Nulla facilisi.',
    user_id: 8,
    post_id: 10
    },
    {
    comment_text: 'Where is the sauce.',
    user_id: 1,
    post_id: 9
    },

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;