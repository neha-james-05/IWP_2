const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add other user details if needed, e.g., name, regNo
  name: { type: String, default: 'Joan J' },
  class: { type: String, default: '5 BTCS A' },
  regNo: { type: String, default: '2360812' }
});

module.exports = mongoose.model('User', UserSchema);