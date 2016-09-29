import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('instrument');
  },
  actions: {
    addUserInstrument (instrument) {
      let newInstrument = this.get('store').createRecord('user-instrument', instrument);
      newInstrument.save();
    }
  },
});
