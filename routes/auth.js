const
  {Router} = require('express'),
  controller = require('../controllers/auth');

const router = new Router();

router.get('/register', controller.register);

module.exports = router;
