const
  {Router} = require('express'),
  controller = require('../controllers/auth');

const router = new Router();

router.get('/register', controller.register);
router.get('/login', controller.login);

module.exports = router;
