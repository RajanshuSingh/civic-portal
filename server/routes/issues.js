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

// Get a specific issue by ID
router.get('/:id', async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ message: 'Issue not found' });
    res.json(issue);
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

// Update an existing issue by ID
router.patch('/:id', async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ message: 'Issue not found' });

    if (req.body.title != null) issue.title = req.body.title;
    if (req.body.description != null) issue.description = req.body.description;

    const updatedIssue = await issue.save();
    res.json(updatedIssue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an issue by ID
router.delete('/:id', async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ message: 'Issue not found' });

    await issue.remove();
    res.json({ message: 'Issue deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
