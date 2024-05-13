const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'librarian', 'admin'],
    default: 'user',
  }
}, { timestamps: true });

userSchema.statics.isEmailAlreadyTaken = async function(email) {
  const user = await this.findOne({ email });
  return !!user;
}

userSchema.methods.isPasswordMatch = async function(password) {
  const user = this;
  return bcrypt.compare(password, user.password);
}

userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 12);
  }
  next();
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;