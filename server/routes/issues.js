// server/routes/issues.js
const express = require('express');
const router = express.Router();
const Issue = require('../models/Issue');

// Get all issues
router.get('/', async (req, res) => {
  try {
    const issues = await Issue.find();
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new issue
router.post('/', async (req, res) => {
  const issue = new Issue({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newIssue = await issue.save();
    res.status(201).json(newIssue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
