import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('public-pages', { path: '' }, function() {

  });
  this.route('legacy-demo');
  this.route('helpers-testing');
});

export default Router;
