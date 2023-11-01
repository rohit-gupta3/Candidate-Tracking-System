const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    regno:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,

})

const studentDB= mongoose.model('Student_Details',schema);
module.exports = studentDB;