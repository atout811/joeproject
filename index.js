const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// Database connection
mongoose.connect(
  "mongodb://localhost:27017/Playground",
  { useNewUrlParser: true, useUnifiedTopology: true },

  err => {
    if (!err) {
      console.log("DataBase Connected");
    } else {
      console.log(" DataBase Faield connection");
    }
  }
);
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
