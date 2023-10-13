const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const api = require('./api/index');
require('dotenv').config();

app.use(cors());
app.use('/assets', express.static('assets'));

// Database connection
mongoose.connect('mongodb+srv://jors:Telkom0329@crowdfounding.hbzrysc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menggunakan rute utama dari api/index.js
app.use('/v1', api);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});

module.exports = app;
