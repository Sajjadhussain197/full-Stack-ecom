import Product from "../models/products.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility.class.js";
import { rm } from "fs";
export const newProduct = TryCatch(async (req, res, next) => {
    const { name, description, price, category, stock } = req.body;
    const photo = req.file;
    if (!photo)
        return next(new ErrorHandler("please add Photo", 400));
    if (!name || !description || !price || !category || !stock) {
        rm(photo.path, () => {
            console.log("deleted");
        });
        return next(new ErrorHandler("please enter All Field", 400));
    }
    await Product.create({
        name,
        description,
        price,
        category: category.toLowerCase(),
        stock,
        photos: photo?.path,
    });
    return res.status(201).json({
        success: true,
        message: "Product Created Successfully",
        product: newProduct
    });
});
