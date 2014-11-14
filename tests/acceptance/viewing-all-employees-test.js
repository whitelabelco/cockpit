import Ember from "ember";
import startApp from "../helpers/start-app";
import Pretender from "pretender";
import authenticateSession from "simple-auth-testing/test-helpers";

var App, server;

module("Acceptance - Viewing all employees", {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
    if (!Ember.isNone(server)) {
      server.shutdown();
    }
  }
});

test("viewing all the employees", function() {
  server = new Pretender(function() {
    this.get("/api/employees", function() {
      var employees = { employees: [{id: 1, first_name: "Kevin", last_name: "Spacey", email: "kevin.spacey@gmail.com" },
                                    {id: 2, first_name: "Frank", last_name: "Underwood", email: "frank.underwood@gmail.com" }]};
      return [200, { "Content-Type": "application/json" }, JSON.stringify(employees)];
    });
  });

  authenticateSession();
  visit("/").then(function() {
    equal(find(".employee").length, 2);
  });
});
