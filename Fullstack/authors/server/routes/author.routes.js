const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    app.get('/api', AuthorController.getAllAuthors);
    app.get('/api/:id', AuthorController.getOneAuthor);
    app.post('/api/create', AuthorController.create);
    app.put('/api/edit/:id', AuthorController.editOneAuthor);
    app.delete('/api/delete/:id', AuthorController.deleteAuthor);
}