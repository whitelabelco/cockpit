import Ember from "ember";

export default Ember.Component.extend({
  employees: function() {
    var store = this.get("targetObject.store");
    return store.findAll("employee");
  }.property()
});
