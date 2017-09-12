// require in the orm file that will talk to the database
var orm = require("../config/orm.js");

// create the aura variable that will be exported back to the controller
var aura = {
  // selectAll for getting all the burgers
  all: function(cb) {
    orm.all('audio', function(res) {
      cb(res);
    });
  },
  // insertOne for adding a new burger
  create: function(cols, vals, cb) {
    orm.create('audio', cols, vals, function(res) {
      cb(res);
    });
  },
  // updateOne for changing the burger status
  update: function(objColVals, condition, cb) {
    orm.update('audio', objColVals, condition, function(res) {
      cb(res);
    });
  }
};


// export aura back to the controller
module.exports = aura;