import express from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route.js';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
