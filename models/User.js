const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    require: true
  },
  balance: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    default: ''
  },
  dateAt: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', schema);
