import express from "express";
import dotenv from "dotenv";
import db from "./config/connection.js";
import router from "./route/route.js";
import bodyParser from "body-parser";
import cors from "cors"
import { createProduct } from "./controller/product.controller.js";

dotenv.config(); 
import kafkaConfig from "./config/kafkaConfig.js";
const app = express();

const corsOptions = {
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router)


const port = process.env.PORT || 4001
const kafka = new kafkaConfig();
kafka.consume("new-prodct", ( value) => {
//    createAddress(value)
createProduct(value)

//console.log(value, ' this is the product...')
})


try {
    await db.authenticate();
    await db.sync({alter:true});
    console.log("The connection to potgres has been stablished...")
} catch (error) {
    console.log("It has been an error to stablish the connection...", error)
    
}


app.listen(port, ( ) => {
    console.log('app running on port: ', port);
})