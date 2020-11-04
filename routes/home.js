const
  {Router} = require('express'),
  controller = require('../controllers/home');

const router = new Router();

router.get('/', controller.home);

module.exports = router;
