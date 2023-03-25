import { createReducer, on } from '@ngrx/store';
import { FoodTruck } from 'src/app/models/foodtruck.model';
import {
  AddFoodTruck,
  GetAllFoodTrucksSuccess,
} from '../actions/foodTruck.actions';

export interface FoodTruckState {
  readonly foodTrucks: FoodTruck[];
  readonly error: string;
}

export const initialFoodTruckState: FoodTruckState = {
  foodTrucks: [],
  error: 'Init',
};

export const foodTruckReducer = createReducer(
  initialFoodTruckState,
  on(GetAllFoodTrucksSuccess, (state, { foodTrucks }) => {
    return {
      ...state,
      foodTrucks: foodTrucks,
      error: 'Modified',
    };
  }),
  on(AddFoodTruck, (state, { foodTruck }) => {
    return {
      ...state,
      foodTrucks: [...state.foodTrucks, foodTruck],
      error: 'Modified',
    };
  })
);
