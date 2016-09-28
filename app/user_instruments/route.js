import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('user_instrument');
  },
  actions: {
    deleteInstrument(userInstrument){
      userInstrument.destroyRecord();
    },
  },
});
