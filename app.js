import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createmongoconnection } from "./db";


import  addRoute from './routes/admin';
import customerRouter from './routes/customer'



createmongoconnection();

const app = express();


app.use(cors({ origin: "*" }));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" })); 




app.use('/admin',addRoute);
app.use('/customer',customerRouter)




export default app;
