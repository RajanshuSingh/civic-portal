// server/models/Issue.js
const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  datePosted: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Issue', IssueSchema);



//hiii 
