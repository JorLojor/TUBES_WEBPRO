const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const api = require('./api/index');
require('dotenv').config();


app.use(cors())
app.use('/assets',express.static('assets')); 

app.use(`/v1`,api)

// database conection
mongoose.connect('mongodb+srv://jors:Telkom0329@crowdfounding.hbzrysc.mongodb.net/?retryWrites=true&w=majority')
// database conection

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes


// routes


module.exports = app;
