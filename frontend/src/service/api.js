import axios from "axios";


const URL= 'http://localhost:8080';

export const authenticateSignup = async(data)=>{
    try{
 return await axios.post(`${URL}/signup`,data)
    }catch(err){
console.log("err while calling signup api ", err);
    }
}

export const authenticateLogin = async(data)=>{
    try{
 return await axios.post(`${URL}/login`,data)
    }catch(err){
console.log("err while calling login api ", err);
    return err.response;
}
}