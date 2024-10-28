import express from "express";
import { connectDb } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
//routes
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
const PORT = process.env.PORT || 4000;
connectDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("API Working with /api/v1");
});
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});
