import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('faq');
  this.route('support');
  this.route('register');
  this.route('log-in');
});

export default Router;
