import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

var HarvestAuthenticator = Base.extend({
  authenticate: function(params) {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      self.makeRequest("http://localhost:4567/api/accounts/me", "GET", { access_token: params.token }).then(function(response) {
        var user = response.user;
        user = Ember.merge(user, { access_token: params.token, refresh_token: params.refresh_token, expires_at: params.expires_at });
        resolve(user);
      }, function(xhr) {
        reject(xhr);
      });
    });
  },

  makeRequest: function(url, type, data) {
    console.log(data);
    return Ember.$.ajax({
      url:         url,
      type:        type,
      data:        data,
      dataType:    'json',
      contentType: 'application/json'
    });
  }
});

export default HarvestAuthenticator;
