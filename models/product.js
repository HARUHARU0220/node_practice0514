import mongoose from "mongoose";
const productSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
        stock: Number
        // name, price, description, stock
    },
    {
        timestamps: true
    }

)


const productModel = mongoose.model('product',productSchema)
export default productModel
