import express from 'express';   // Use import instead of require 
import dotenv from 'dotenv';     // Import dotenv as a module
import users from './api.js';
dotenv.config();  // Load the environment variables from .env file

const app = express();
const port = 8000;  // Default port can still be hardcoded or you can use process.env.port

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/about', (req, res) => {
  res.send("About");
});

app.get('/login', (req, res) => {
  res.send("Login");
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${process.env.PORT || port}`);
});
