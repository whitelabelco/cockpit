import Ember from "ember";

export default Ember.Route.extend({
  model: function(queryParams) {
    console.log(queryParams);
  }
});
