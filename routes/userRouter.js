const Router = require('express').Router();
const userController = require('../controllers/userController');

Router.route('/user')
  .get(userController.getUser)
  .post(userController.createUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = Router;
