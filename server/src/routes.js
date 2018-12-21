const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const GrillsController = require('./controllers/GrillsController');
const BookmarksController = require('./controllers/BookmarksController');

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);
  app.post('/login',
    AuthenticationController.login);
  app.get('/grills',
    GrillsController.index);
  app.post('/grills',
    GrillsController.create);
  app.get('/grills/:grillId',
    GrillsController.show);
  app.put('/grills/:grillId',
    GrillsController.put);
  app.get('/bookmarks',
    BookmarksController.index);
  app.post('/bookmarks',
    BookmarksController.post);
  app.delete('/bookmarks/:bookmarkId',
    BookmarksController.delete);
};
