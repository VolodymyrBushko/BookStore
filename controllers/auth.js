const User = require('../models/User');

module.exports = {

  getRegister(req, res) {
    res.render('auth/register', {
      isRegister: true
    });
  },

  getLogin(req, res) {
    res.render('auth/login', {
      isLogin: true
    });
  },

  async postRegister(req, res) {
    try {
      await User.create(req.body);
      await res.status(201).json({message: 'user has been created'});
    } catch ({message}) {
      await res.status(500).json({message});
    }
  },

  async postLogin(req, res) {
    try {
      await User.findOne({email: req.email});
      await res.json({message: 'sign in'});
    } catch ({message}) {
      await res.status(500).json({message});
    }
  }

}
