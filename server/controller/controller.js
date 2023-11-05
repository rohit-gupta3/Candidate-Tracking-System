const studentDB = require('../model/model');
const express = require('express');
const route = express.Router();

//creat and save new user
exports.create = (req,res)=>{
    const student = new studentDB({
        name:req.body.name,
        email:req.body.email,
        dob:req.body.dob,
        mobile:req.body.mobile,
        gender:req.body.gender,
        role:req.body.role,
        regno:req.body.regno,
        university:req.body.university,
        degree:req.body.degree,
        branch:req.body.branch,
        cgpa:req.body.cgpa,
        tenth:req.body.tenth,
        highSchool:req.body.highSchool,
        
    })

    student
        .save(student)
        .then(data => {
            res.render("index");
        })
        .catch(err =>{
            res.status(500).send({
                message:err.message || "Some error occured"
            })
        })
}

exports.find = (req,res)=>{

}

exports.accept = (req,res)=>{

}

exports.reject = (req,res)=>{

}

