const User = require('../models/User');

module.exports = {

  register(req, res) {
    res.render('auth/register', {
      isRegister: true
    });
  },

  login(req, res) {
    res.render('auth/login', {
      isLogin: true
    });
  }

}
