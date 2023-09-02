import express from "express";
import { userSignup ,userLogin} from "../controller/user-controller.js";
import {  getProductById, getProducts} from "../controller/product-controller.js";
import { addPaymentGateway, paytmResponse  } from '../controller/payment-controller.js';
// import { getMobileById, getMobiles } from "../controller/mobile-controller.js";

const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products',getProducts);

// router.post('/products',productsCreate);
// router.put('/:id',productsUpdate);
// router.delete('/:id',productsDelete);

router.get('/product/:id',getProductById);


// router.get('/mobiles',getMobiles);
// router.get('/mobile/:id',getMobileById);


router.post('/payment', addPaymentGateway);
router.post('/callback', paytmResponse);




export default router;