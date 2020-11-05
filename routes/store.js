const
  {Router} = require('express'),
  controller = require('../controllers/store');

const router = new Router();

router.get('/', controller.store);

module.exports = router;
