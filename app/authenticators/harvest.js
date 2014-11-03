import Base from 'simple-auth/authenticators/base';

var HarvestAuthenticator = Base.extend({
  authenticate: function(params) {
    console.log(params);
    return new Ember.RSVP.Promise(function(resolve, reject) {});
  }
});

export default HarvestAuthenticator;
