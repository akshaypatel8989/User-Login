require('dotenv').config();
const express =require("express");
const app = express();
const router =require("./router/auth-router");
const connectDb=require("./utils/db");
//Mount the Router To use the route in your   express app : you can "moun "
// spacfic url

app.use(express.json());
 
app.use("/api/auth",router);




const PORT=5000;

connectDb().then(()=>{


app.listen(PORT,()=>{
    console.log(`server run on ${PORT}`)
})
})
