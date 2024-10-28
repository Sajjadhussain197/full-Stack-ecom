import express from "express";
import { deleteUserById, getAllUsers, getUserById, newUser } from "../controllers/user.js";
import { AdminOnly } from "../middlewares/auth.js";
const app = express.Router();
//api/v1/user/new
// Ensure registerUser is typed correctly as a RequestHandler
app.post("/new", newUser);
//api/v1/user/all       
app.get("/all", AdminOnly, getAllUsers);
//api/v1/user/:id
app.route("/:id").get(getUserById).delete(AdminOnly, deleteUserById);
export default app;
