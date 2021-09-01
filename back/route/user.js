module.exports = (app) => {
  const users = require("../controller/user.controller");
  const auth = require("../middleware/auth");

  // const role = require('../middleware/role');
  // Create a new user
  app.post("/register", users.create);
  //login in users
  app.post("/login", users.authenticate);
  // Retrieve all users
  app.get("/users", users.findAll);

  // Retrieve a single user with userId
  app.get("/user/:id", auth, users.findOne);

  // Update a user with userId
  app.put("/user/:userId", users.update);

  // Delete a user with userId
  app.delete("/user/:userId", users.delete);

  //Delete all users
  // app.delete("/users", users.deleteAll);

  //get user profile with token
  app.put("/profile", auth, users.update);


  // update user profile with token
  app.get("/profile", auth, users.findProfile);

};

