// Calling the express library
const express = require("express");

// Calling the express method ()
const app = express();

// Calling to use port in Heroku 
const PORT = process.env.PORT || 3000;
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server Routes
// express use the root path to render the htmlRoutes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

// Listener to initiate server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

