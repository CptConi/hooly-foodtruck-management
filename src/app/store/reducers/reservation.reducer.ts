import { createReducer, on } from '@ngrx/store';
import { Reservation } from 'src/app/models/reservation.model';
import { GetAllReservationsSuccess } from '../actions/reservation.actions';

export interface ReservationState {
  readonly reservations: Reservation[];
  readonly error: string;
}

export const initialReservationState: ReservationState = {
  reservations: [],
  error: 'Init',
};

export const reservationReducer = createReducer(
  initialReservationState,
  on(GetAllReservationsSuccess, (state, { reservations }) => {
    return {
      ...state,
      reservations: reservations,
      error: 'Modified',
    };
  })
);
