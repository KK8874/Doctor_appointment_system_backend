import mongoose from "mongoose";

const AdminSchema= new mongoose.Schema({


    fullname:{
        type:String,
        require:true
    },

  
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }

})
const Admin = mongoose.model("Admin",AdminSchema);
export default Admin;