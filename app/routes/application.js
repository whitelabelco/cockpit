import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    authenticate: function() {
      this.get('session').authenticate('authenticator:harvest', {});
    }
  }
});
