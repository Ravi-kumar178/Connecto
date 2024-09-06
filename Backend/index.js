import dotenv from "dotenv";
import express from "express";
import {dbConnect} from "./Config/Database.js"
import cookieParser from "cookie-parser";
import authRoute from "./Routes/auth.routes.js"


const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/auth",authRoute);

//db-connection
dbConnect();

//app listening
app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`)
});

app.get("/",(req,res)=>{
    res.send("App is up and running");
})

