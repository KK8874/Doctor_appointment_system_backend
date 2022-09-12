import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    student:{
        type:String,
        required:true
    },
    backend:{
        type:Number,
        required:true
    },
    frontend:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },


  
 


})
userSchema.plugin(paginate);
const Book = mongoose.model("Book",userSchema);
export default Book;