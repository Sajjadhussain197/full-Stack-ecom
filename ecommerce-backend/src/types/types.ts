import { NextFunction, Request, Response } from "express";

export interface NewUserRequestBody{
    _id:string;
    name:string;
    email:string;
    password:string;
    role: string;
    gender:string;
    dob:Date;
    photo:string;

}
export interface NewProductRequestBody{
    name:string;
    description:string;
    price:number;
    category:string;
    stock:number;
}

export type ControllerType= (
    req:Request,
    res:Response,
    next:NextFunction
)=>Promise<void | Response <any, Record<string,any>>>;   
