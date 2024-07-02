import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import { UserController } from '../controllers/UserController.js';


const app = express();
const port = process.env.PORT || 3000;

const userController = new UserController();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.get('/users', (req, res) => userController.getAll(req, res));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
