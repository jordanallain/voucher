import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('instruments');
  this.route('user_instruments');
  this.route('bio-edit');
  // this.route('user/bio', {path: 'users/:user_id/bio-edit'});
  // this.route('user_instruments')
  // this.route('instrument', {path: '/user_instruments'});
});

export default Router;
