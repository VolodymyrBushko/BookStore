const User = require('../models/User');
const {validationResult} = require('express-validator');

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

      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({message: errors.array()[0].msg});

      await User.create(req.body);
      await res.status(201).json({message: 'user has been created'});
    } catch ({message}) {
      await res.status(500).json({message});
    }
  },

  async postLogin(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({message: errors.array()[0].msg});

      const user = await User.findOne({email: req.email});
      user ? await res.json({message: 'sign in'}) : await res.status(404).json({message: 'user is not found'})
    } catch ({message}) {
      await res.status(500).json({message});
    }
  }

}
