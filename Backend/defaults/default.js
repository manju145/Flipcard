import { products } from "../connection/data.js"
import Product from "../model/product.schema.js";

const DefaultData= async()=>{
try{
    await Product.deleteMany({})
    await Product.insertMany(products);
 
console.log("Product Data Imported Successfully")
}catch(err){
    console.log('err while inserting default data', err.message);
}
}


export default DefaultData;
