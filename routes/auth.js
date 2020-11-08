const
  {Router} = require('express'),
  controller = require('../controllers/auth'),
  loginValidator = require('../validators/login.validator'),
  registerValidator = require('../validators/register.validator');

const router = new Router();

router.get('/register', controller.getRegister);
router.get('/login', controller.getLogin);
router.post('/register', registerValidator, controller.postRegister);
router.post('/login', loginValidator, controller.postLogin);
router.get('/logout', controller.signOut);

module.exports = router;
