import mongoose from "mongoose";


const userShema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true,
        trim:true,
        min:5,
        max:20
    },
    lastname:{
        type:String,
        required: true,
        trim:true,
        min:5,
        max:20
    },
    username:{
        type:String,
        required: true,
        trim:true,
     unique:true,
     index:true,
     lowercase:true,
    },
    email:{
        type:String,
        required: true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required: true,
           },
    phone:{
        type:String,
        required: true,
        trim:true,
        },
});

const User= mongoose.model('user',userShema);

export default User;

