const JokeController = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}