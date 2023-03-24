import { createReducer, on } from '@ngrx/store';
import { FoodTruck } from 'src/app/models/foodtruck.model';
import { GetAllFoodTrucksSuccess } from '../actions/foodTruck.actions';

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
    console.log(state, foodTrucks);
    return {
      ...state,
      foodTrucks: foodTrucks,
      error: 'Modified',
    };
  })
);
