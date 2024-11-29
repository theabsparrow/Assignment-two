import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await orderService.createOrder(payload);
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message:
        error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

export const orderController = {
  createOrder,
};
