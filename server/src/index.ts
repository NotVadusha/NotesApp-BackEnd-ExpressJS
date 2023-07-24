import express from "express";
import router from "./router";
import connectDB from "./db.connect";
import { errorsMiddleware } from "./middlewares/errors.middleware";

require("dotenv").config({ path: "../server/.env" });

const app = express();

app.use(express.json());
app.use("/api", router);
app.use("/api", errorsMiddleware);

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "";

connectDB(DB_URL);
app.listen(PORT, () => {
  console.log(`Listening ${PORT} port`);
});
