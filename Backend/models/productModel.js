import mongoose from "mongoose";

const productSchema = mongoose.Schema([
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: Buffer,
            required: true,
        },
        description: {
            type: String,
        },
        category: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0.0,
        },
        stock: {
            type: Number,
            default: 0,
        },
    }
],
    {
        timestamps: true
    }
);

export default mongoose.model("product", productSchema)