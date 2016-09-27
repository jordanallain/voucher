import DS from 'ember-data';
// import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  instrument: DS.belongsTo('instrument')
});
