const
  {Router} = require('express'),
  controller = require('../controllers/auth');

const router = new Router();

router.get('/register', controller.getRegister);
router.get('/login', controller.getLogin);
router.post('/register', controller.postRegister);
router.post('/login', controller.postLogin);

module.exports = router;
