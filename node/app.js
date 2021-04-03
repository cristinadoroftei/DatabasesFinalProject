const express = require("express");
const app = express();

const path = require("path");

// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/getText", (req, res, next) => {
  res.send({ text: "motherfucka" });
});

const port = process.env.PORT ? process.env.PORT : 3001;

const server = app.listen(port, (error) => {
  if (error) {
    console.log("Error starting the server");
  }
  console.log("Server running on port", server.address().port);
});
