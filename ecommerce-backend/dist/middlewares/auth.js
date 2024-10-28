import User from "../models/user.js";
import ErrorHandler from "../utils/utility.class.js";
import { TryCatch } from "./error.js";
//middleware to ensure only admin is allowed
export const AdminOnly = TryCatch(async (req, res, next) => {
    const { id } = req.query;
    if (!id) {
        return next(new ErrorHandler("Login Required", 401));
    }
    const user = await User.findById(id);
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    if (user?.role !== "admin") {
        return next(new ErrorHandler("Admin only allowed", 403));
    }
    next();
});
