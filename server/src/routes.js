const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const GrillsController = require('./controllers/GrillsController');

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
};
