import mongoose from "mongoose";

const CustomerSchema= new mongoose.Schema({


    customername:{
        type:String,
        require:true
    },

  
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    }

})
const Customer = mongoose.model("Customer",CustomerSchema);
export default Customer;

