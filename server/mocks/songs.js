module.exports = function(app) {
  var express = require('express');
  var songsRouter = express.Router();

  songsRouter.get('/', function(req, res) {
    res.send({
      'songs': []
    });
  });

  songsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  songsRouter.get('/:id', function(req, res) {
    res.send({
      'song': [
        {id: 1, name: "Song0", style: "jazz"},
        {id: 2, name: "Song1", style: "rock&roll"},
        {id: 3, name: "Song1", style: "soul jazz"},
        {id: 4, name: "Song2", style: "Drun n base"},
        {id: 5, name: "Song3", style: "Dubstep"},
        {id: 6, name: "Song4", style: "Rap"},
        {id: 7, name: "Song5", style: "R n B"},
        {id: 8, name: "Song6", style: "Classic"}
      ]
    });
  });

  songsRouter.put('/:id', function(req, res) {
    res.send({
      'songs': {
        id: req.params.id
      }
    });
  });

  songsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/songs', songsRouter);
};
