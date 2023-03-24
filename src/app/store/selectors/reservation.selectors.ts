import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ReservationState } from '../reducers/reservation.reducer';

export const selectReservationsState = (state: AppState) => state.reservations;

export const selectAllReservations = createSelector(
  selectReservationsState,
  (reservations: ReservationState) => {
    return reservations.reservations;
  }
);
