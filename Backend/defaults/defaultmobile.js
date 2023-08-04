import { mobiles } from "../connection/mobile.js";
import Mobile from "../model/mobile.schema.js";


const DefaultMobileData= async()=>{
try{
    // await Mobile.deleteMany({})
    await Mobile.insertMany(mobiles);

console.log("Mobile Data Imported Successfully")
}catch(err){
    console.log('err while inserting default data', err.message);
}
}


export default DefaultMobileData;
