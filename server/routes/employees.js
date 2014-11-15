module.exports = function(app) {
  app.get("/api/employees", function(req, res) {
    var employees = { employees: [{id: 1, first_name: "Scott", last_name: "Radcliff", email: "scott@wlabel.co"},
                                  {id: 2, first_name: "Jon", last_name: "Spencer", email: "jon@wlabel.co"}]};
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(employees);
  });
};
