const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const api = require('./api/index');
require('dotenv').config();


app.use(cors())
app.use('/assets',express.static('assets')); 



// database conection
mongoose.connect('mongodb+srv://jors:Telkom0329@crowdfounding.hbzrysc.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// database conection

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
        message: err.message,
        data: null,
    });
});
// error handler


module.exports = app;
