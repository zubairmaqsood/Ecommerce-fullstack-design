import productModel from "../models/productModel.js";

export const createProduct = async (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: "Image is required" });
    }
    const { ...rest } = req.body;
    const product = await productModel.create({
        ...rest,
        image: req.file.buffer
    });

    if (!product) {
        return res.status(400).send({ message: "Product creation failed" });
    }

    res.status(201).send({ message: "Product created successfully" });
}

export const readProduct = async (req, res) => {
    const product = await productModel.find().select("-__v -createdAt -updatedAt"); // Exclude __v, createdAt, and updatedAt fields
    if (!product) {
        return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send(product);
}

export const getSingleProduct = async (req, res) => {
    // Check if the product ID is provided in the request parameters
    if (!req.params.id) {
        return res.status(400).send({ message: "Product ID is required" });
    }

    const id = req.params.id;
    const product = await productModel.findById(id).select("-__v -createdAt -updatedAt"); // Exclude __v, createdAt, and updatedAt fields
    if (!product) {
        return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send(product);
}

export const updateProduct = async (req, res) => {
    try {
        // Check if the product ID is provided in the request parameters
        if (!req.params.id) {
            return res.status(400).send({ message: "Product ID is required" });
        }

        const id = req.params.id;
        const { ...rest } = req.body;

        const updateData = {
            ...rest,
            ...(req.file && { image: req.file.buffer }) // Only update image if a new one is provided
        };
        const product = await productModel.findOneAndUpdate(
            { _id: id },
            updateData,
            { runValidators: true, new: true }
        );

        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send({ message: "Product updated successfully" });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const deleteProduct = async (req, res) => {
    // Check if the product ID is provided in the request parameters
    if (!req.params.id) {
        return res.status(400).send({ message: "Product ID is required" });
    }

    const id = req.params.id;
    const product = await productModel.findByIdAndDelete(id);
    if (!product) {
        return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send({ message: "Product deleted successfully" });
}

export const filterProduct = async (req, res) => {
    try {
        const { name, category } = req.query;
        const filter = {};
        if (name) {
            filter.name = { $regex: name, $options: "i" };
        }

        if (category) {
            filter.category = category

        }

        const products = await productModel.find(filter).select("-__v -createdAt -updatedAt"); // Exclude __v, createdAt, and updatedAt fields
        if (products.length === 0) {
            return res.status(404).send({ message: "No products found" });
        }
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
