import { Router } from 'express';
import { orderController } from './order.controller';

const orderRouter = Router();

orderRouter.post('/orders', orderController.createOrder);

export default orderRouter;
