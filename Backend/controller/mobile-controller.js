import Mobile from "../model/mobile.schema.js"; 


export  const getMobiles =async(request,response)=>{
try{
 const mobile= await  Mobile.find({});

response.status(200).json(mobile);
}catch(error){
    response.status(500).json({message:error.message});
}
}


export const getMobileById = async (request,response)=>{
    try{
const id= request.params.id;
 const mobile= await Mobile.findOne({'id':id})
    
 response.status(200).json(mobile);
}catch(error){
    response.status(500).json({message:error.message});
    }
}
