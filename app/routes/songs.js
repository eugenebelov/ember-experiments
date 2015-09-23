import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log(this)
      return this.store.findRecord('song', 5);

      // return this.store.findRecord('song', params.id);
  }
});
