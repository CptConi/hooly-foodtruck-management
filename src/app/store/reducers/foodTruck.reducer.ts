import { createReducer, on } from '@ngrx/store';
import { FoodTruck } from 'src/app/models/foodtruck.model';
import {
  AddFoodTruck,
  GetAllFoodTrucksSuccess,
} from '../actions/foodTruck.actions';

export interface FoodTruckState {
  readonly foodTrucks: FoodTruck[] | null;
}

export const initialFoodTruckState: FoodTruckState = {
  foodTrucks: null,
};

export const foodTruckReducer = createReducer(
  initialFoodTruckState,
  on(GetAllFoodTrucksSuccess, (state, { foodTrucks }) => {
    return {
      ...state,
      foodTrucks: foodTrucks,
    };
  }),
  on(AddFoodTruck, (state, { foodTruck }) => {
    const stateCopy = !!state.foodTrucks ? state.foodTrucks : [];
    return {
      ...state,
      foodTrucks: [...stateCopy, foodTruck],
    };
  })
);
