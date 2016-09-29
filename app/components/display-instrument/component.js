import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addUserInstrument() {
      this.sendAction('addUserInstrument', this.get('instrument'));
    }
  }
});
