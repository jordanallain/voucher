import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  instrument: DS.belongsTo('instrument'),
  styles: DS.attr('string')
});
