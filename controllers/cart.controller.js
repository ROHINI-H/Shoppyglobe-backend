import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";

// Add the product to cart
export const addItem = async (req, res) => {
    const { productID, quantity } = req.body;
    const userId = req.userId;

    // find the product from db
    const product = await productModel.findOne({ id: productID });

    // If not present, return 404 error
    if (!product) return res.status(404).json({ message: "Product not found" });

    // find the cart for the current user
    let cart = await cartModel.findOne({ user: userId });

    // checks if the product is found in cart
    if (!cart) {
        cart = new cartModel({ user: userId, items: [{ productID, quantity }] });
    } else {
        const itemIndex = cart.items.findIndex(i => i.productID === productID);
        (itemIndex > -1) ? cart.items[itemIndex].quantity += quantity : cart.items.push({ productID, quantity });
    }

    // save and return cart
    await cart.save();
    res.json(cart);
};

// Update the cart items
export const updateItem = async (req, res) => {
    const { quantity } = req.body;
        const userId = req.userId;

    // find the cart for the current user
    let cart = await cartModel.findOne({ user: userId });

    // Find the item in cart
    const item = cart.items.find(i => i.productID == parseInt(req.params.id));

    // if item not present
    if (!item) return res.status(404).json({ message: "You haven't added the item to the cart" });

    // if present
    item.quantity = quantity;

    // save and return cart
    await cart.save();
    res.json(cart);
};

// remove items from the cart
export const removeItem = async (req, res) => {
    // find the user's cart
    const cart = await cartModel.findOne({ user: req.userId });

    // delete the products with the id
    cart.items = cart.items.filter(i => i.productID != parseInt(req.params.id));

    // save and return cart
    await cart.save();
    res.json(cart);
};

//get the current user's cart
export const getCartItems = async (req, res) => {
    try {
        // find the cart
        const cart = await cartModel.findOne({ user: req.userId });

        // If cart not found
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        // If found -> return cart
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
