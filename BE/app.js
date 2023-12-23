const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const cors = require('cors');
const api = require('./api/index');
require('dotenv').config();

// Middleware CORS
app.use(cors());

// Middleware Static untuk Upload
app.use('/get-img', express.static(path.join(__dirname, 'Upload'))); // http://localhost:3777/Upload/1616740744479-10000000-1.jpg

// URL Koneksi MongoDB
const url = 'mongodb+srv://nugas123man:Telkom.0329@tubeswebpro.fprfgno.mongodb.net/?retryWrites=true&w=majority';

// Database Connection
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to the Database successfully');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Middleware Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', api);

// Error Handler
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        request: req.body,
        next: next.api,
        message: err.message,
        data: null,
    });
});

module.exports = app;
