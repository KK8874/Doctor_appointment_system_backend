import Admin from '../model/Admin';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';




export const AdminSignup= async(req,res)=>{

try{
    const Addadmin= new Admin({

       
         fullname:req.body.fullname,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password, 8),
    });

    const result= await Addadmin.save()

    res.send({
        status:true,
        message:"successfull",
        result:result
    })
}
catch(e){
    console.log(e)
}
}

// login part

// export const AdminLogin = async (req, res) => {
//     const { email, password } = req.body;
  
//     const result = await Admin.findOne({ email });
//     if (!result) {
//       res.send({
//         status: false,
//         message: "Email is Incorrect!!!",
//       });
//     }
  
//     const isValid = bcrypt.compareSync(password, result.password);
  
//     if (isValid) {
//       res.send({
//         status: true,
//         message: "Login Success",
//       });
//     } else {
//       res.send({ status: false, message: "Password is incorrect" });
//     }

//   }

// token

export const AdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Admin.findOne({ email });



        const isvalid = bcrypt.compareSync(password, user.password);

        let payload = {};
        payload.id = user._id;
        payload.email = user.email;
        payload.password = user.password;


        jwt.sign(payload, 'SECRET_KEY', {
            "expiresIn": "24h"

        },
            (err, token) => {
                res.send({
                    status: 200,
                    message: "Login Success",
                    result: token
                })
                res.send({ status: false, message: "password Incorrect", code: 400 })
            })
    }
    catch (e) {
        throw e
    }

}

