// Requiring our models
var db = require("../models");
var color;

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/moods", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Mood.findAll({}).then(function(dbMood) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbMood);
    });
  });

  // POST route for saving a new todo
  // app.post("/api/moods", function(req, res) {
  //   // create takes an argument of an object describing the item we want to
  //   // insert into our table. In this case we just we pass in an object with a text
  //   // and complete property (req.body)
  //   db.Mood.create({
  //     number: req.body.integer
  //   }).then(function(dbMood) {
  //     // We have access to the new todo as an argument inside of the callback function
  //     res.json(dbMood);
  //   })
  //   .catch(function(err) {
  //     // Whenever a validation or flag fails, an error is thrown
  //     // We can "catch" the error to prevent it from being "thrown", which could crash our node app
  //     res.json(err);
  //   });
  // });

  app.post("/api/moods/:color", function(req,res){
    console.log(req.params)
  if(req.params.color == 1){
    color = "red"
  }
  else if(req.params.color ==2){
    color = "pink"
  }

  db.Mood.create({
    color: color
  });
});

}



//   // PUT route for updating todos. We can get the updated todo data from req.body
//   app.put("/api/moods", function(req, res) {

//     // Update takes in an object describing the properties we want to update, and
//     // we use where to describe which objects we want to update
//     db.Mood.update({
//       text: req.body.text,
//       complete: req.body.complete
//     }, {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbTodo) {
//       res.json(dbTodo);
//     })
//     .catch(function(err) {
//       // Whenever a validation or flag fails, an error is thrown
//       // We can "catch" the error to prevent it from being "thrown", which could crash our node app
//       res.json(err);
//     });
//   });
// };
