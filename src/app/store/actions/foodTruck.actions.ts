import { createAction } from '@ngrx/store';
import { FoodTruck } from 'src/app/models/foodtruck.model';

export const GetAllFoodTrucks = createAction(
  '[Food Truck] Get All Food Trucks'
);

export const GetAllFoodTrucksSuccess = createAction(
  '[Food Truck] Get All Food Trucks Success',
  (foodTrucks: FoodTruck[]) => ({ foodTrucks })
);

export const AddFoodTruck = createAction(
  '[Food Truck] Add Food Truck',
  (foodTruck: FoodTruck) => ({ foodTruck })
);
