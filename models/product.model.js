import mongoose from "mongoose";

// create the product Schema
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: String,
    price: Number,
    description: String,
    stock: Number
});

// create the product model
const productModel = mongoose.model("Product", productSchema);

export default productModel;