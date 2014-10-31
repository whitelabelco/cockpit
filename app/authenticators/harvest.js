import Base from 'simple-auth/authenticators/base';

var HarvestAuthenticator = Base.extend({
  authenticate: function() {
    var url = "https://wlabel.harvestapp.com/oauth2/authorize?client_id=GKziWg1e5IqQ31P_xmGt8Q&redirect_uri=https://oauth2-login-demo.appspot.com/oauth/callback&state=optional-csrf-token&response_type=token";
    var dialog = window.open(url, 'Authorize', 'height=600, width=450');
    if (window.focus && dialog) { dialog.focus(); }

    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (dialog) { console.log(dialog); resolve(dialog); }
      else { reject(new Error('Opening dialog login window failed.')); }
    });
  }
});

export default HarvestAuthenticator;
