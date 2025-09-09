const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty'); // Import the model

// @route   GET api/faculty
// @desc    Get all faculty members
router.get('/', async (req, res) => {
  try {
    const facultyMembers = await Faculty.find();
    res.json(facultyMembers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;