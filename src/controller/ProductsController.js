const ProductModel = require('../model/ProductsModel');

exports.createProduct = async (req, res) => {
    const product = new ProductModel(req.body);
    const result = await product.save();

    res.status(200).json({
        status: "success",
        data: result
    });
}
exports.readProduct = async (req, res) => {
    try {
        const result = await ProductModel.find();
        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        console.log(error);
    }
}
exports.readProductDetails = async (req, res) => {
    try {
        const result = await ProductModel.findById({ _id: req.params.id });
        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        console.log(error);
    }
}
exports.updateProduct = async (req, res) => {
    const result = await ProductModel.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json({
        status: "success",
        data: result
    });
}
exports.deleteProduct = async (req, res) => {
    const result = await ProductModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
        status: "success",
        data: result
    });
}

