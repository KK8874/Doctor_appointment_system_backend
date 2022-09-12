const config = {
    local:{
        DB:{
            host:"localhost",
            portno:27017,
            dbname:"shivam",
           
        },
        port_no:7899
    }
}
export const get = (env) =>{
    return config [env];
}