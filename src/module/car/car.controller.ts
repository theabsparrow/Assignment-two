import { Request, Response } from 'express';
import { carService } from './car.service';

// create a car data controller
const createCar = async (req: Request, res: Response) => {
  try {
    const payloade = req.body;
    const result = await carService.createCar(payloade);

    res.status(200).json({
      success: true,
      message: 'Car created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

// get all cars controller
const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await carService.getAllCars();

    res.json({
      message: 'Car retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

// get a specefic car controller
const getSingleCar = async (req: Request, res: Response) => {
  try {
    const payload = req.params.carId;
    const result = await carService.getSingleCar(payload);
    res.json({
      message: 'Car retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

// update a car
const updateCar = async (req: Request, res: Response) => {
  try {
    const payload = req.params.id;
    const data = req.body;

    const result = await carService.updateCar(payload, data);
    res.json({
      message: 'Car updated successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

export const carController = {
  createCar,
  getAllCars,
  getSingleCar,
  updateCar,
};
