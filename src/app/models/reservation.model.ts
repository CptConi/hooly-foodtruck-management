import MealType from '../enums/mealType';
import { FoodTruck } from './foodtruck.model';

export interface Reservation {
  id: number;
  date: Date;
  location: string;
  meal: MealType;
  foodTruck?: FoodTruck;
}
