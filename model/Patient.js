import mongoose, { model } from "mongoose";


const PatientSchema=  new mongoose.Schema({

    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }


})

 const Patient=mongoose.model('/patient',PatientSchema);
 export default Patient;



