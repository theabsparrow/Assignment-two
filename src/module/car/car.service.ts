import { Tcar } from './car.interface';
import CarModel from './car.model';

// create a car service
const createCar = async (payload: Tcar) => {
  try {
    const result = await CarModel.create(payload);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// get all cars service
const getAllCars = async () => {
  try {
    const result = await CarModel.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// get a single car service
const getSingleCar = async (id: string) => {
  try {
    const result = await CarModel.findById(id);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const carService = {
  createCar,
  getAllCars,
  getSingleCar,
};
