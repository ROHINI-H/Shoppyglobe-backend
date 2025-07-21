import mongoose from "mongoose";

// create the user Schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// create the user model
const userModel = mongoose.model("User", userSchema);

export default userModel;
