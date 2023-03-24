import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.state';
import { foodTruckReducer } from './foodTruck.reducer';
import { reservationReducer } from './reservation.reducer';

export const reducers: ActionReducerMap<AppState> = {
  foodTrucks: foodTruckReducer,
  reservations: reservationReducer,
};
