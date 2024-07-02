import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Importing cors properly
import { UserController } from '../controllers/UserController.js';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for a specific origin
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const userController = new UserController();

// Simple route for testing
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Route to get all users
app.get('/users', (req, res) => userController.getAll(req, res));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
