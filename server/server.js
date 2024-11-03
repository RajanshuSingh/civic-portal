require('dotenv').config(); // Load environment variables from .env
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const mongoURI = process.env.MONGO_URI; // Retrieve the MongoDB URI
console.log("MongoDB URI:", mongoURI); // Log the URI to check if it's loaded correctly

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
