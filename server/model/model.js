const { Decimal128, GridFSBucket, ObjectId } = require('mongodb');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true,
    },
    mobile:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    regno:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    cgpa:{
        type:Decimal128,
        required:true
    },
    tenth:{
        type:Decimal128,
        required:true
    },
    highSchool:{
        type:Decimal128,
        required:true
    },
    resumeId : {
        type: Buffer,
        required: true
    }
})

const studentDB= mongoose.model('Student_Details',schema);
module.exports = studentDB;