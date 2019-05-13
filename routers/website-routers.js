const express = require('express');
route = express.Router();



route.get('/', (req, res) => {
    res.render('index');
});

module.exports = route;