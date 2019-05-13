// It contains Code to run Server

// import statements
const express = require('express');
const route = require('./routers/website-routers');
const ejs = require('ejs');
const mongoose = require('./databaseCode/db');

const app = express();

app.set('view engine', 'ejs');
app.use('/', route);


app.listen(process.env.PORT || 3000, () => {
    console.log('express is working fine !!');
});