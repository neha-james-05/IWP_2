const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String },
  campus: { type: String },
  location: { type: String }
});

module.exports = mongoose.model('Faculty', FacultySchema);