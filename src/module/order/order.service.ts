import CarModel from '../car/car.model';
import { Torder } from './order.interface';
import OrderModel from './order.model';

const createOrder = async (payload: Torder) => {
  const { car, quantity } = payload;

  const carData = await CarModel.findById(car);

  //   check if the car is not available
  if (!carData) {
    throw new Error('This car is not available right now');
  }

  //    check if there is enough car quantity
  if (quantity > carData.quantity) {
    throw new Error('stock is insufficient right now');
  }

  //   create the order
  const totalPrice = carData.price * quantity;
  const orderCreation = await OrderModel.create({ ...payload, totalPrice });

  //   update the quantity and inStock from he Cars collection
  if (orderCreation) {
    const newQuantity = carData.quantity - quantity;
    const updatedData = {
      quantity: newQuantity,
      inStock: newQuantity > 0 ? true : false,
    };
    await CarModel.findByIdAndUpdate(car, updatedData, { new: true });
  }
  return orderCreation;
};

export const orderService = {
  createOrder,
};
