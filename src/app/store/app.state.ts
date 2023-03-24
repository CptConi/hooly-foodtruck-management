import { FoodTruckState } from './reducers/foodTruck.reducer';
import { ReservationState } from './reducers/reservation.reducer';

export interface AppState {
  readonly foodTrucks: FoodTruckState;
  readonly reservations: ReservationState;
}
