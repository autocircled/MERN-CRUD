const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: String,
        sku: String,
        description: String,
        price: Number,
        img: String,
        qty: Number
    },
    {
        versionKey: false,
        timestamps: true
    });

const ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel