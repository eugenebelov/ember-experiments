module.exports = function(app) {
  var express = require('express');
  var artistsRouter = express.Router();

  artistsRouter.get('/', function(req, res) {
    res.send({
      artist: [
        {id: 1, name: "Jimmy Handriks", style: "jazz"},
        {id: 2, name: "Tommy Gun", style: "rock&roll"},
        {id: 3, name: "Tommy Gun1", style: "soul jazz"},
        {id: 4, name: "Tommy Gun2", style: "Drun n base"},
        {id: 5, name: "Tommy Gun3", style: "Dubstep"},
        {id: 6, name: "Tommy Gun4", style: "Rap"},
        {id: 7, name: "Tommy Gun5", style: "R n B"},
        {id: 8, name: "Tommy Gun6", style: "Classic"}
      ]
    });
  });

  artistsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  artistsRouter.get('/info/:id', function(req, res) {
    res.send({
      'artist': {id: 1, name: "Tommy Gun3", style: "Dubstep"}
    });
  });

  artistsRouter.put('/:id', function(req, res) {
    res.send({
      'artist': {
        id: req.params.id
      }
    });
  });

  artistsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/artists', artistsRouter);
};
