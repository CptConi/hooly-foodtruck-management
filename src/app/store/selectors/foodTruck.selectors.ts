import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { FoodTruckState } from '../reducers/foodTruck.reducer';

export const selectFoodTrucksState = (state: AppState) => state.foodTrucks;

export const selectAllFoodTrucks = createSelector(
  selectFoodTrucksState,
  (foodTrucks: FoodTruckState) => {
    return foodTrucks.foodTrucks;
  }
);
