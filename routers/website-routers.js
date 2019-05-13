const express = require('express');
const key = require('../keys');
const mongoose = require('mongoose');
const Project = require('../databaseCode/ProjectSchemas');

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

router.post('/login/validate/project/add', (req, res) => {
    const project = new Project();
    project.project_image_url = req.body.imageurl;
    project.project_description = req.body.description;
    project.project_url = req.body.projecturl;
    project.save();
});

module.exports = route;