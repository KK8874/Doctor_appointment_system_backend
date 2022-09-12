
import Book from '../model/Book'
import Patient from '../model/Patient';
import bcrypt from 'bcryptjs'

import mongoose from 'mongoose';


//patientsignup

export const patientsignup = async(req,res)=>{

    const addsignup=new Patient({
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password)
    })
    const result = await addsignup.save();

    try{
        res.send({
            status:200,
            meassage:"successfull",
            result:result
        })
    }
    catch (e){

    }
    throw e

}


//book add signup
export const Addteacher = async (req, res) => {

    const Adddata = new Book({

        fullname: req.body.fullname,
        student: req.body.student,
        backend: req.body.backend,
        frontend:req.body.frontend,
        email: req.body.email,
        
      
       

    })
    const userDetails = await Adddata.save();
    try {
        res.send({
            status: 200,
            message: "book add successfull",
            result: userDetails
        })
    }
    catch (e) {
        throw e
    }
}
// login

export const studentlogin = async (req, res) => {
    const { email, password } = req.body;
    const book = await Patient.findOne({ email });
    if (!book) {
        res.send({
            status: false,
            message: "email not valid",
            
        })
    }
console.log(book)
    const isValid = bcrypt.compareSync(password, book.password);
    console.log(isValid)
    if (isValid) {


        res.send({
            status:true,
            message: "login succesful ",
            result:book


        }) }
    else {
        res.send({
            status: false,
            message: "password incorrect",
            
        });
    }
}
//get list from dbs
export const teacherlist = async (req, res) => {
    try {
        const userdata = await Book.find();
        res.send({
            status: 200,
            message: "list geting successfully",
            result: userdata
        })

    }
    catch (e) {
        throw e

    }
}
//Get detailbyid-----
export const getDetailById = async (req, res) => {

    try {
        var _id = req.query._id
        console.log(_id)
        const id = await Book.findById(_id);
        
        res.send({
            status: true,
            message: "user id grting successfully",
            result: id
        })
    }
    catch (e) {
        return res.send({
            status: false,
            message: "error",
            result: e
        })
    }

}
//update collection
export const Updateteacher = async (req, res) => {

    try {
        let jsondata = {};

        if (req.body.fullname) {
            jsondata.fullname = req.body.fullname;
        }
        if (req.body.student) {
            jsondata.student = req.body.student;
        }
        if (req.body.backend) {
            jsondata.backend = req.body.backend;
        }
        if (req.body.backend) {
            jsondata.backend = req.body.backend;
        }

        Book.updateOne({ _id: req.body._id },
            { $set: jsondata },
            { new: true },
            (err, updatedlist) => {
                if (err) {
                    res.send({
                        status: 404,
                        message: "Failed",
                        result: err
                    })
                } else {
                    res.send({
                        status: 200,
                        message: "Updated Successfully",
                        result: updatedlist
                    })
                    console.log(updatedlist)
                }
            })
    }
    catch (e) {
        throw e
    }
}

//delete detabse
export const deleteteacher = async (req, res,) => {

    try {
        let _id = req.params.id
        console.log(_id)
        // book.findOne({ _id: req.body._id }),
        const user = await Book.deleteOne({ _id: mongoose.Types.ObjectId(_id) })
         if(user){
            res.send({
                message:"document deleted bro!"
            })
         }
                
    }
    catch (e) {
        throw e
    }
}
