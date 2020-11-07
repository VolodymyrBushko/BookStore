const {body} = require('express-validator');
const User = require('../models/User');

module.exports = [

  body('email')
    .trim()
    .notEmpty()
    .isEmail()
    .custom(value => {
      return User.findOne({email: value}).then(user => {
        if (!user)
          return Promise.reject('user is not found');
      });
    })
    .withMessage('invalid user email'),

  body('password')
    .trim()
    .notEmpty()
    .isLength({min: 6, max: 16})
    .withMessage('invalid user password')

];
