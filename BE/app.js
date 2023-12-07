const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const api = require('./api/index');
require('dotenv').config();


app.use(cors())
app.use('/assets',express.static('assets')); 

const url = 'mongodb+srv://nugas123man:Telkom.0329@tubeswebpro.fprfgno.mongodb.net/?retryWrites=true&w=majority';

// database conection
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to the Database successfully')
});


// body parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// api
app.use('/api', api)
// api

// error handler
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        request : req.body,
        next : next.api,
        message: err.message,
        data: null,
    });
});
// error handler


module.exports = app;
