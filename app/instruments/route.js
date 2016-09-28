import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('instrument');
  },
  actions: {
    addUserInstrument (instrument) {
      // createRecord
      // instrument.createRecord('user_instrument');
      console.log(instrument);
      // this.get('store').createRecord('user-instrument', params.user.id);
      // debugger;
    }
  },
});
