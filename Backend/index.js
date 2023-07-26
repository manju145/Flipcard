import express from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from "body-parser";
import { Connection } from "./connection/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Router);





const PORT= 8080;

const USERNAME=process.env.DB_USERNAME


const PASSWORD=process.env.DB_PASSWORD

Connection(USERNAME,PASSWORD);
app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT} `));




DefaultData();