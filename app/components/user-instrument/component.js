import Ember from 'ember';

export default Ember.Component.extend({


  actions: {
    deleteInstrument() {
      this.sendAction('deleteInstrument', this.get('userInstrument'));
    },
    updateStyles() {
      this.sendAction('updateStyles', this.get('userInstrument'));
    }
  }
});
