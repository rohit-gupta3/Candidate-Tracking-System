const studentDB = require('../model/model');


//creat and save new user
exports.create = (req,res)=>{
    const student = new StudentDB({
        name:req.body.name,
        email:req.body.email,
    })

    student
        .save(student)
        .then(data => {
            res.send(data)
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

