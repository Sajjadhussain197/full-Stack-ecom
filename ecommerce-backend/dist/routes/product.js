import express from "express";
import { upload } from "../middlewares/multer.js";
import { newProduct } from "../controllers/product.js";
const app = express.Router();
app.route("/new").post(upload, newProduct);
export default app;
