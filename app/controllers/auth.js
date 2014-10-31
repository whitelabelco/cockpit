import Ember from "ember";

export default Ember.Controller.extend({
  queryParams: ['token', 'refresh_token', 'expires_at']
});
