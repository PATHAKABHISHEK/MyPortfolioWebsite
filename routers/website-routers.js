const express = require('express');
const key = require('../keys');

route = express.Router();


route.get('/', (req, res) => {
    res.render('index');
});

route.get('/login', (req, res) => {
    res.render('login-form');
});

route.post('/login/validate', (req, res) => {
    if (req.body.username === key.login.username){
        if(req.body.password === key.login.password){
            res.render('create-project-form');
        }
    }
});

module.exports = route;