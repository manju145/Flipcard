import * as actionTypes from "../constants/mobiledata"



export const getmobileProductsReducer=(state={mobiles:[]},action)=>{
switch(action.type){
    case actionTypes.GET_MOBILE_PRODUCTS_SUCCESS:
return {mobiles: action.payload}

    case actionTypes.GET_MOBILE_PRODUCTS_FAIL:
        return {error: action.payload}


    default:
        return state;
}
}

// // export const getmobileProductDetailsReducer=(state={mobile:{}},action)=>{
   
// //     switch(action.type){
// //         case actionTypes.GET_MOBILE_PRODUCT_DETAIL_REQUEST:
// //           return {loading:true}  
    
// //           case actionTypes.GET_MOBILE_PRODUCT_DETAIL_SUCCESS:
// //             return {loading:false, mobile:action.payload}  
       
// //             case actionTypes.GET_MOBILE_PRODUCT_DETAIL_FAIL:
// //                 return {loading:false, error: action.payload}  
        
        
// //                 case actionTypes.GET_MOBILE_PRODUCT_DETAIL_RESET:
// //                     return {mobile:{}}  
            

// //                 default:
// //                     return state;
// //             }
// // }