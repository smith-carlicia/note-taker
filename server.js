// callingthe express library
const express = require("express");

// calling the express method ()
const app = express();

const PORT = process.env.PORT || 8083;
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server Routes
// express use the root path to render the htmlRoutes
app.use("/", htmlRoutes);

// Listener to initiate server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });