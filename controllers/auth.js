const
  User = require('../models/User'),
  {validationResult} = require('express-validator'),
  bcrypt = require('bcrypt');

const saltRounds = 10;

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

      const salt = await bcrypt.genSalt(saltRounds);
      req.body.password = await bcrypt.hash(req.body.password, salt);

      await User.create(req.body);
      await res.redirect('/auth/login');
    } catch ({message}) {
      await res.status(500).json({message});
    }
  },

  async postLogin(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({message: errors.array()[0].msg});

      const {email, password} = req.body;
      const {password: hash} = await User.findOne({email});
      const valid = await bcrypt.compare(password, hash);

      if (valid) {
        await res.json({message: 'sign in successful'});
      } else {
        await res.status(422).json({message: 'invalid password'})
      }

    } catch ({message}) {
      await res.status(500).json({message});
    }
  }

}
