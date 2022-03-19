const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.post('/api/product', ProductController.createProduct);
    app.put('/api/product/edit/:id', ProductController.editOneProduct);
    app.delete('/api/delete/product/:id', ProductController.deleteProduct);
}