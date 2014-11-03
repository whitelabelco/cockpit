import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

var HarvestAuthenticator = Base.extend({
  authenticate: function(params) {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      self.makeRequest("https://wlabel.harvestapp.com/account/who_am_i", "GET", { access_token: params.token }).then(function(response) {
        console.log("RESPONSE: " + response);
      }, function(xhr, status, error) {
        console.log("ERROR: " + xhr.responseJSON);
      });
    });
  },

  makeRequest: function(url, type, data) {
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
