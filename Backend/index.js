const express = require("express");
const app = express();
const dotenv = require("dotenv");
//port
dotenv.config();
const PORT = process.env.PORT || 4000;

const dbConnect = require("./Config/Database");
dbConnect();

app.listen(PORT, ()=>{
    console.log(`App is running at ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("App is up and running");
})