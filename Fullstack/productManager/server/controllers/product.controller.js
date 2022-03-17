const Product = require('../models/product.model'); 

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then((allDaProducts) => {
            res.json({ products: allDaProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.createProduct = (request, response) => {
    Product.create(request.body)
    .then(product => response.json(product))
    .catch(err => response.json(err));
}
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json({ products: oneSingleProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}