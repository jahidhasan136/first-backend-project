import express from 'express';

import cors from 'cors';
import globalErrorhandler from './app/middlewares/globalErrorhandler.js';
import notFound from './app/middlewares/notFound.js';
import router from './app/routes/index.js';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

// Not Found
app.use(notFound);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(globalErrorhandler);

export default app;
