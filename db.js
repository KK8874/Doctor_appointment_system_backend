import mongoose from "mongoose";
const db = require('./config').get('local').DB;
console.log(db);

var mongourl =`mongodb://${db.host}:${db.portno}/shivam`;
console.log(mongourl);


export const createmongoconnection = async() => {
    try{
        await mongoose.connect(mongourl)
        console.log("connection success");
    }
    catch(e){
        throw e 
        
    }
}