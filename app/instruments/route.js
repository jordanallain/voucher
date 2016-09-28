import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('instrument');
  },
  actions: {
    addUserInstrument (params) {
      // createRecord
      // console.log("addUserInstrument invoked!");
      debugger;
      this.get('store').createRecord('user-instrument', params.user.id);
      // debugger;
    }
  },
});
