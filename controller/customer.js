import Customer from "../model/customer";



export const CustomerSignup= async(req,res)=>{

    try{
        const Addcustomer= new Customer({
    
           
             customername:req.body.customername,
            email:req.body.email,
           phone:req.body.phone
        });
    
        const result= await Addcustomer.save()
    
        res.send({
            status:true,
            message:"successfull",
            result:result
        })
    }
    catch(e){
        throw e
    }
    }

    // list

    export const customerlist = async (req, res) => {
        let query = await Customer.find({})
      
        try {
            res.send({
                status: "200",
                message: "successfully",
                result: query
            })
        }
        catch (e) {
            throw e
        } 
      
      }

      // delete
