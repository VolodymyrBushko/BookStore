const
  {Router} = require('express'),
  controller = require('../controllers/profile');

const router = new Router();

router.get('/', controller.profile);

module.exports = router;
