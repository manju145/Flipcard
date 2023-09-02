import axios from "axios";
import * as actionTypes from "../constants/mobiledata"

const URL= 'https://agreeable-hospital-gown-tuna.cyclic.app';



export  const getmobileProducts = () => async(dispatch)=>{
    try{
   const {data}= await axios.get(`${URL}/mobiles`);

dispatch({type:actionTypes.GET_MOBILE_PRODUCTS_SUCCESS, payload:data});

}catch(error){
    dispatch({type:actionTypes.GET_MOBILE_PRODUCTS_FAIL,payload:error.message });

    }
};



// export const getmobileProductDetails =(id)=> async(dispatch)=> {
// try{
// dispatch({type:actionTypes.GET_MOBILE_PRODUCT_DETAIL_REQUEST});
// const {data}= await axios.get(`${URL}/mobile/${id}`);

// dispatch({type:actionTypes.GET_MOBILE_PRODUCT_DETAIL_SUCCESS, payload:data});

// }catch(error){
//     dispatch({type:actionTypes.GET_MOBILE_PRODUCT_DETAIL_FAIL,payload:error.message });

// }
// }