import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  bio: DS.attr('string'),
  instruments: DS.hasMany('instrument')
});
