const {body} = require('express-validator');

module.exports = [

  body('email')
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage('invalid user email'),

  body('password')
    .trim()
    .notEmpty()
    .isLength({min: 6, max: 16})
    .withMessage('invalid user password')

];
