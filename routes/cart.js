const
  {Router} = require('express'),
  controller = require('../controllers/cart');

const router = new Router();

router.get('/', controller.cart);

module.exports = router;
