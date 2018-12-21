const Promise = require('bluebird');
// init models
const {
  sequelize,
  Grill,
  User,
  Bookmark,
} = require('../src/models');

const grills = require('./grills.json');
const users = require('./users.json');
const bookmarks = require('./bookmarks.json');

sequelize.sync({ force: true })
  .then(async () => {
    await Promise.all(
      users.map(user => User.create(user)),
    );
    await Promise.all(
      grills.map(grill => Grill.create(grill)),
    );
    await Promise.all(
      bookmarks.map(bookmark => Bookmark.create(bookmark)),
    );
  });
