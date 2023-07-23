import express from "express";
import router from "./router";
import connectDB from "./db.connect";

import { Request, Response, NextFunction } from "express";

const notesMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Working");
  next();
};

require("dotenv").config({ path: __dirname + "/.env" });

const app = express();

app.use(notesMiddleware);
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "";

connectDB(DB_URL);
app.listen(PORT, () => {
  console.log(`Listening ${PORT} port`);
});
