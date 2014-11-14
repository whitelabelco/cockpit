import Ember from "ember";

export default Ember.Component.extend({
  employees: function() {
    return ['Alice'];
  }.property()
})
