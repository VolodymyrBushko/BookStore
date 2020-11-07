const {body} = require('express-validator');
const User = require('../models/User');

module.exports = [

  body('name')
    .trim()
    .notEmpty()
    .isLength({min: 2, max: 16})
    .withMessage('invalid user name'),

  body('email')
    .trim()
    .notEmpty()
    .isEmail()
    .custom(value => {
      return User.findOne({email: value}).then(user => {
        if (user)
          return Promise.reject('email already in use');
      })
    })
    .withMessage('invalid user email'),

  body('password')
    .trim()
    .notEmpty()
    .isLength({min: 6, max: 16})
    .withMessage('invalid user password'),

  body('confirm-password')
    .trim()
    .notEmpty()
    .isLength({min: 6, max: 16})
    .custom((value, {req}) => {
      if (value !== req.body.password)
        throw new Error('password confirmation does not match password');
      return true;
    })
    .withMessage('invalid confirm password')

];
