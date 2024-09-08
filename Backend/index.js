import dotenv from "dotenv";
import express from "express";
import {dbConnect} from "./Config/Database.js"
import cookieParser from "cookie-parser";
import authRoute from "./Routes/auth.routes.js"
import messageRoute from "./Routes/message.route.js"
import userRoutes from "./Routes/user.routes.js"
import cors from "cors"


const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors(
    {
        origin:"http://localhost:3000",
        credentials: true
    }
))
app.use(cookieParser());

//routes
app.use("/auth",authRoute);
app.use("/message",messageRoute);
app.use("/users",userRoutes);

//db-connection
dbConnect();

//app listening
app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`)
});

app.get("/",(req,res)=>{
    res.send("App is up and running");
})

