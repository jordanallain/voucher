import Ember from 'ember';

export default Ember.Component.extend({


  actions: {
    deleteInstrument() {
      this.sendAction('deleteInstrument', this.get('userInstrument'));
      // console.log(this.get('userInstrument'));
    },
    updateStyles() {
      let data = this.get('userInstrument');
      console.log(data);
      console.log(data.instrument);
      console.log(data.styles);
      this.sendAction('updateStyles', this.get('userInstrument'));
    }
  }
});
