const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter your name'],
  },
  username: {
    type: String,
    required: [true, 'please enter your username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'please enter your password'],
    minlength: 8,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
