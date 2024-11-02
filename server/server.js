// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/issues', require('./routes/issues'));
app.use('/api/events', require('./routes/events'));
app.use('/api/volunteer', require('./routes/volunteer'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
