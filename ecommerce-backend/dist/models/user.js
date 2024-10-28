import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Please Enter id"]
    },
    photo: {
        type: String,
        required: [true, "Please Enter Photo"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    name: {
        type: String,
        required: [true, "Please Enter Name"]
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please Enter Gender"]
    },
    dob: {
        type: Date,
        required: [true, "Please Enter Date of Birth"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"],
        unique: [true, "Email already exists"],
        validate: validator.default.isEmail
    }
}, {
    timestamps: true
});
schema.virtual("age").get(function () {
    const today = new Date();
    const birthDate = new Date(this.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
});
const User = mongoose.model("User", schema);
export default User;
