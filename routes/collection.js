const
  {Router} = require('express'),
  controller = require('../controllers/collection');

const router = new Router();

router.get('/', controller.collection);

module.exports = router;
