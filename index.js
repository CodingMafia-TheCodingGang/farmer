const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const controllers = require('./Controllers/UserSignUp.js');


const app = express();
let port = 8000;
app.listen(port);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));

const signup = controllers.SignUp;
const login = controllers.Login;


app.get ('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'static/farmers.html'));
})


app.post("/signup", signup);
app.get('/login' ,login);






























  const uri = "mongodb://localhost:27017/test";
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to MongoDB database");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB database:", err);
    });