import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artist-list', { path: 'artists' });
  this.route('song-list', { path: 'songs' });
});

export default Router;
