import Ember from "ember";

export default Ember.Route.extend({
  model: function(queryParams) {
    this.get('session').authenticate('authenticator:harvest', queryParams);
  }
});
