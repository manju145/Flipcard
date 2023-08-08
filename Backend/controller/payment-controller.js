import paytmchecksum from '../paytm/PaytmChecksum.js'
import { paytmMerchantKey, paytmParams } from "../server.js"
import formidable from 'formidable';


export const addPaymentGateway= async (request,response)=>{
       try{
        let paytmcheckSum=  await  paytmchecksum.generateSignature(paytmParams,paytmMerchantKey);
 let params ={
    ...paytmParams,'CHECKSUMHASH': paytmcheckSum
 }
 response.status(200).json(params);
}catch(err){
    response.status(500).json({err: err.message});
}
}

export const paytmResponse=(request,response)=>{
const form = new formidable.IncomingForm();
let paytmcheckSum= request.body.CHECKSUMHASH;
delete request.body.CHECKSUMHASH;

let isverifySignaturte = paytmchecksum.verifySignature( request.body,paytmMerchantKey,paytmcheckSum);

if(isverifySignaturte){
let paytmParams ={};
paytmParams['MID'] = request.body.MID;
paytmParams['ORDERID'] = request.body.ORDERID;

paytmchecksum.generateSignature(paytmParams,paytmMerchantKey).then(function(checksum){
    paytmParams['CHECKSUMHASH']= checksum;

  let post_data = JSON.stringify(paytmParams) ;

  let options ={
    hostname: 'securegw-stage.paytm.in',
    port:443,
    path: '/order/status',
    headers:{
        'Content-Type': 'application/json',
        'Content-Length': post_data.length
    }
  }

  let res = "";
let post_req = https.request(options,function(post_res){
    post_res.on('data',function(chunk){
        res += chunk;
    });
    post_res.on('end',function(){
        let result = JSON.parse(res);
response.redirect('http://localhost:3000')
    })
})

post_req.write(post_data);
post_req.end();

});
}else{
    console.log('Checksum mismatched');
}
}
