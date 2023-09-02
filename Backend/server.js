import express from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from "body-parser";
import {v4 as uuid} from 'uuid';
import { Connection } from "./connection/db.js";
import DefaultData from "./defaults/default.js";
import Router from "./routes/route.js";
// import DefaultMobileData from "./defaults/defaultmobile.js";



dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Flikart Data backend");
  });

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Router);




const PORT=  8080;

const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD

 Connection(USERNAME,PASSWORD);



app.listen(process.env.PORT ||8080 ,()=>{

    console.log(`Server is running successfully on PORT ${PORT} `)
});


DefaultData();

// DefaultMobileData();


export let  paytmMerchantKey =process.env.PAYTM_MERCHANT_KEY ;
export let paytmParams ={};
paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID']=uuid();
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:8080/callback';
paytmParams['EMAIL'] = 'manjuyadav@gmail.com';
paytmParams['MOBILE_NO'] ='1234567892';



