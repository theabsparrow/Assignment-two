import { Schema, model } from 'mongoose';
import { Tcar } from './car.interface';

const carSchema = new Schema<Tcar>({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

carSchema.pre('save', function (next) {
  const now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  this.updatedAt = now;
  next();
});

const CarModel = model<Tcar>('Car', carSchema);
export default CarModel;
