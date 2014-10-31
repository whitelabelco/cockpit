import Ember from "ember";
import ENV from '../config/environment';

export default Ember.Controller.extend({
  serverUrl: ENV.serverUrl,
  harvestOAuthUrl: function() {
    var origin = window.location.origin + "/auth";
    return this.serverUrl + "/auth/harvest?origin=" + origin;
  }.property()
});
