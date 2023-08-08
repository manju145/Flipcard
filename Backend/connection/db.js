import mongoose from "mongoose";


export const Connection = async(username,password)=>{
    const Mongoose_URL=`mongodb://${username}:${password}@ac-kz72pr1-shard-00-00.nea1wji.mongodb.net:27017,ac-kz72pr1-shard-00-01.nea1wji.mongodb.net:27017,ac-kz72pr1-shard-00-02.nea1wji.mongodb.net:27017/FLIPKART?ssl=true&replicaSet=atlas-13jygg-shard-0&authSource=admin&retryWrites=true&w=majority`;  
    try{
await mongoose.connect(Mongoose_URL,{useUnifiedTopology:true, useNewUrlParser:true})
    console.log("Connected Db Successfully")
}catch(err){
        console.log('err',err.message)
    }
}
