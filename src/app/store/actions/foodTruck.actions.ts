import { createAction } from '@ngrx/store';
import { FoodTruck } from 'src/app/models/foodtruck.model';

export const GetAllFoodTrucks = createAction(
  '[Food Truck] Get All Food Trucks'
);

export const GetAllFoodTrucksSuccess = createAction(
  '[Food Truck] Get All Food Trucks Success',
  (foodTrucks: FoodTruck[]) => ({ foodTrucks })
);
