//THIS File contains ADDING WISHLIST

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./database');
// const app = express();
// const mongoose = require('mongoose');
// const Wishlist = require('./routes/wishes');
// const port = 3001; 


// Middleware to parse request bodies as JSON
// app.use(express.json());

// Connect to MongoDB using Mongoose
// mongoose.connect('mongodb://localhost/wishlistdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => {
//   console.error('Error connecting to MongoDB:', err);
// });




const app = express();
/* To handle the HTTP Methods Body Parser is used, Generally used to extract the entire body portion of an incoming request stream and exposes it on req.body
*/

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json(database);
});

app.put("/add", (req, res) => {
  database.push({
    id: database[database.length - 1].id + 1,
    name: req.body.name,
    price: req.body.price,
    link: req.body.link,
  });
  try {
    res.status(200).json(database);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

let port = 8000;

app.listen(port, () => {
  console.log(`Port is running at ${port}`);
});

