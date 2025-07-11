import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.use(errorHandler);

export default app;
