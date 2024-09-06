const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookie = require("cookie-parser");


//body-parser
app.use(express.json());
app.use(cookie());
//port
dotenv.config();
const PORT = process.env.PORT || 4000;

const dbConnect = require("./Config/Database");
dbConnect();

app.listen(PORT, ()=>{
    console.log(`App is running at ${PORT}`);
})

//routes
const router = require("./Routes/routes");
app.use("/api/v1/",router);

app.get("/",(req,res)=>{
    res.send("App is up and running");
})