import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return ['song 1', 'song 2', 'song 3', 'song 4']
  }
});
