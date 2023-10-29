const express = require('express');
const route = express.Router();

//const services = require('../services/render');


/**
 * @description home page
 */
route.get('/',(req,res)=>{
    res.render('index');
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

module.exports = route