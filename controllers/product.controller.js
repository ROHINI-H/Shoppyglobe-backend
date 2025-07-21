import productModel from "../models/product.model.js"

// fetches all the products from the db
export const getProducts = async (req, res) => {
    const products = await productModel.find();
    res.json(products);
};

// fetches the single product
export const getSingleProduct = async (req, res) => {
    const product = await productModel.findOne({ id: parseInt(req.params.id) });

    // if product not found
    if (!product) return res.status(404).json({ message: "Product not found" });

    // if product found
    res.json(product);
};

// Adds new product to db POST
export const createProduct = async (req, res) => {
    try {
        const { id, name, price, description, stock } = req.body;

        //find the product in db
        const product = await productModel.findOne({ id });
        if (product) return res.status(400).json({ message: 'Product already present' });

        // else create new product
        const newProduct = new productModel({ id, name, price, description, stock });

        // save the new product to db & return 
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ message: "Internal Server error" });
    }
};

// update the existing product
export const updateProduct = async (req, res) => {
    try {
        // find the product and update it
        const update = await productModel.findOneAndUpdate(
            { id: parseInt(req.params.id) },
            req.body,
            { new: true }
        );

        //if not updated
        if (!update) return res.status(404).json({ message: "Product not found" });

        // if updated
        res.json(update);
    } catch (err) {
        res.status(500).json({ message: "Internal Server error" });
    }
};

// delete the product
export const deleteProduct = async (req, res) => {
    try {
        // find the product and delete it
        const deletedProduct = await productModel.findOneAndDelete({ id: parseInt(req.params.id) });

        // if not deleted
        if (!deletedProduct) return res.status(404).json({ message: "Product not found" });

        // if deleted 
        res.json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
