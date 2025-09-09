const express = require('express');
const router = express.Router();
const Course = require('../models/Course'); // Import the Course model

// @route   GET api/academics
// @desc    Get all courses
// @access  Public
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;