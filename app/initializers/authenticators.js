import Ember from "ember";
import HarvestAuthenticator from "cockpit/authenticators/harvest";

export default {
  name: 'authentication',
  before: 'simple-auth',
  initialize: function(container) {
    container.register('authenticator:harvest', HarvestAuthenticator);
  }
};
