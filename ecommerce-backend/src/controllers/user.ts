
import User from "../models/user.js";
import { NextFunction, Request, Response } from "express";
import { NewUserRequestBody } from "../types/types.js";
import ErrorHandler from "../utils/utility.class.js";
import { TryCatch } from "../middlewares/error.js";



export const newUser=  TryCatch(
    async(
        req:Request<{},{},NewUserRequestBody>,
        res:Response,
        next:NextFunction)=>{
            

        const {name,email,role ,gender,dob,photo,_id}= req.body;
        
        let user = await User.findById(_id);    
        if(user){
             return res.status(200).json({
                success:true,
                message:`Welcome ${name} to the ecommerce`
             })
        }
        if(!name || !email || !role || !gender || !dob || !photo || !_id){
            return next(new ErrorHandler("Please add all fields",400));
        }

        user = await User.create({name,email,role,_id,gender,dob:new Date(dob),photo});

       return res.status(200).json({
            success:true,
            message:`Welcome ${name} to the ecommerce`
        })

}   )

export const getAllUsers = TryCatch(
    async(req:Request,res:Response,next:NextFunction)=>{
        const users = await User.find();
        return res.status(200).json({
            success:true,
            users
        });
    }
)

export const getUserById = TryCatch(
    async(req:Request,res:Response,next:NextFunction)=>{
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
           return next(new ErrorHandler("User not found",404));
        }
        return res.status(200).json({
            success:true,
            user
        });

    }
)   

export const deleteUserById = TryCatch(
    async(req:Request,res:Response,next:NextFunction)=>{
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            return next(new ErrorHandler("User not found",404));
        }
        await user.deleteOne();
        return res.status(200).json({
            success:true,
            message:"User deleted successfully"
        });
    }
)

