import mongoose from "mongoose";

// creates the cart Schema
const cartSchema = new mongoose.Schema({
    user: String,
    items: [{
        productID: Number,
        quantity: Number
    }]
});

// creates the cart model
const cartModel = mongoose.model("Cart", cartSchema);

export default cartModel;
