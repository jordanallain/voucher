import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteInstrument() {
      this.sendAction('deleteInstrument', this.get('userInstrument'));
      // console.log(this.get('userInstrument'));
    },
  }
});
