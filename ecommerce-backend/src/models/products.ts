import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        maxLength:[30,"Name must be less than 30 characters"]
    },  
    description:{
        type:String,
        required:[true,"Description is required"],
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        maxLength:[8,"Price must be less than 8 digits"]
    },
    photos:{
        type:String,
        required:[true,"Photo is required"]
    },
    category:{
        type:String,
        required:[true,"Category is required"],
        trim:true
    },
    stock:{
        type:Number,
        required:[true,"Stock is required"],
        maxLength:[4,"Stock cannot exceed 4 digits"],
        default:1
    },
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User",
    //     required:true
    // }

},{timestamps:true});      

const Product = mongoose.model("Product",productSchema);

export default Product;

