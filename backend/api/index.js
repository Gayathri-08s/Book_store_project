import express from "express";
import { PORT, mongoDBURL } from "../config.js";
import mongoose from "mongoose";
import booksRoute from "../routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Welcome To MERN Stack Tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Export for Vercel
export default app;
