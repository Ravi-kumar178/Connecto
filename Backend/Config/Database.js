import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = () => {
    const Database_Url = process.env.DATABASE_URL;
    
    //Database url not fetched
    if(!Database_Url){
        console.log("Database not present");
    }
    //if present then connect server to db
    mongoose.connect(Database_Url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{console.log("Database connected successfully")})
    .catch((err)=>{
        console.log("Error in db connection");
        console.log(err.message);
        process.exit(1);
    })
}

