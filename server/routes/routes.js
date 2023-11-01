const express = require('express');
const route = express.Router();

//const services = require('../services/render');


/**
 * @description home page
 */
route.get('/',(req,res)=>{
    res.render('index');
});
route.get('/login',(req,res)=>{
    res.render('login');
});
route.post('/dashboard',(req,res)=>{
    res.render('partials/dashboard');
});
route.get('/register',(req,res)=>{
    res.render('register');
});
route.get('/colleges',(req,res)=>{
    res.render('partials/colleges')
})
route.get('/accepted',(req,res)=>{
    res.render('partials/accepted')
})
route.get('/rejected',(req,res)=>{
    res.render('partials/rejected')
})
route.get('/list',(req,res)=>{
    res.render('partials/list')
})


//API
const controller = require('../controller/controller');
route.post('/api/create',controller.create)
route.get('/api/find',controller.find)
route.put('/api/accept',controller.accept)
route.put('/api/reject',controller.reject)
module.exports = route