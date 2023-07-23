import express from "express";
import router from "./router";
import connectDB from "./db.connect";
require("dotenv").config({ path: __dirname + "/.env" });

const app = express();

app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "";

const startApp = async () => {
  try {
    connectDB(DB_URL);
    app.listen(PORT, () => {
      console.log(`Listening ${PORT} port`);
    });
  } catch (e) {
    console.log(e);
  }
};

startApp();