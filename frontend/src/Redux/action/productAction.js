import axios from "axios";
import * as actionTypes from "../constants/productContant"

const URL= 'https://agreeable-hospital-gown-tuna.cyclic.app';



export  const getProducts = () => async(dispatch)=>{
    try{
   const {data}= await axios.get(`${URL}/products`);

dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS, payload:data});

}catch(error){
    dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message });

    }
};



export const getProductDetails =(id)=> async(dispatch)=> {
try{
dispatch({type:actionTypes.GET_PRODUCT_DETAIL_REQUEST});
const {data}= await axios.get(`${URL}/product/${id}`);

dispatch({type:actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload:data});

}catch(error){
    dispatch({type:actionTypes.GET_PRODUCT_DETAIL_FAIL,payload:error.message });

}
}