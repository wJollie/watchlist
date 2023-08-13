// Install required packages: express, body-parser
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create an endpoint to handle adding items to the watchlist
app.post("/api/add-to-watchlist", (req, res) => {
  const movieTitle = req.body.title; // Get the movie title from the request

  // Store the movie title in a database (e.g., MongoDB) for each user

  // You can also fetch streaming service info here and save it to the database
  // based on the chosen API for streaming service availability

  res
    .status(200)
    .json({ message: "Item added to watchlist", title: movieTitle });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
