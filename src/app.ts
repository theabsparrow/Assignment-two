import express, { Request, Response } from 'express';
import cors from 'cors';
import carRouter from './module/car/car.router';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', carRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('car project is running');
});

export default app;
