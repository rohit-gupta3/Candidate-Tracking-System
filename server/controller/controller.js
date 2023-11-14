const studentDB = require("../model/model");
const express = require("express");
const route = express.Router();
const fs = require("fs");

const { connectDB: client } = require("../database/connection");

// const { MongoClient } = require("mongoose");

// async function

//creat and save new user
exports.create = async (req, res) => {
    const resume = req.file;

    //   const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db);

    //   const resumeStream = require("stream").Readable.from(resume.buffer);

    //   // Upload the file to GridFS
    //   const uploadStream = bucket.openUploadStream(resume.originalname);

    //   await new Promise((resolve, reject) => {
    //     resumeStream.pipe(uploadStream).on("finish", resolve).on("error", reject);
    //   });

    //   console.log("Resume uploaded to GridFS with fileId:", uploadStream.id);


    const resumeBuffer = Buffer.from(resume.buffer);


    console.log("Created buffer");

    const student = new studentDB({
        name: req.body.name,
        email: req.body.email,
        dob: req.body.dob,
        mobile: req.body.mobile,
        gender: req.body.gender,
        role: req.body.role,
        regno: req.body.regno,
        university: req.body.university,
        degree: req.body.degree,
        branch: req.body.branch,
        cgpa: req.body.cgpa,
        tenth: req.body.tenth,
        highSchool: req.body.highSchool,
        resumeId: resumeBuffer,
    });

    student
        .save(student)
        .then((data) => {
            res.render("index");
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured",
            });
        });
};

exports.find = async (req, res) => {
    const { id } = req.params;

    const candidateDetails = await studentDB.findById(id);

    if (!candidateDetails) {
        return res.status(500).json({
            message: "internal server error"
        });
    }

    try {

        const resumeBuffer = candidateDetails.resumeId;
        const resFile = fs.writeFileSync(`./temp/${id}.pdf`, resumeBuffer);

        
        console.log(process.cwd() +  `/temp/${id}.pdf`)

        res.sendFile(process.cwd() +  `/temp/${id}.pdf`);
        
    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Internal server error"
        });
    }

};

exports.accept = (req, res) => { };

exports.reject = (req, res) => { };
