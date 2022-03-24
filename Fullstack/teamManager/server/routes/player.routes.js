const PlayerController = require('../controllers/player.controller');
module.exports = (app) => {
    app.get('/api', PlayerController.getAllPlayers);
    app.get('/api/player/:id', PlayerController.getOnePlayer);
    app.post('/api/player', PlayerController.createPlayer);
    app.put('/api/edit/:id', PlayerController.editOnePlayer);
    app.delete('/api/delete/:id', PlayerController.deletePlayer);
}