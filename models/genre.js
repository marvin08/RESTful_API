const mon = require('mongoose');

const genreSchema = mon.Schema({
  name: {
    type: String,
    required: true
  },
  date_of_creation: {
    type: Date,
    default: Date.now
  }
});

var Genre = module.exports = mon.model('Genre', genreSchema);

module.exports.getGenres = function(callback, limit) {
  Genre.find(callback).limit(limit);
};

module.exports.addGenre = function(genre, callback) {
  Genre.create(genre, callback);
};

module.exports.updateGenre = function(id, genre, options, callback) {
  var query = {_id: id};
  var update = {
    name: genre.name
  };
  Genre.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeGenre = function(id, callback) {
  var query = {_id: id};
  Genre.remove(query, callback);
};
