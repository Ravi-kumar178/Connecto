const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = () => {
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

module.exports = dbConnect;