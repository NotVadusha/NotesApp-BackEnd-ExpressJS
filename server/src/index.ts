
import express from "express";
import mongoose from "mongoose";
import router from "./router";

const app = express();
const PORT = 3000;
const DB_URL = "mongodb+srv://user:user@todocluster.te8hiir.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json())
app.use("/api", router)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, ()=>{
            console.log(`Listening ${PORT} port`);
        })
    }catch (e){
        console.log(e)
    }
}

startApp();
