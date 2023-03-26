import { createReducer, on } from '@ngrx/store';
import { ReservationDTO } from 'src/app/models/DTOs/reservationDTO.model';
import {
  AddReservation,
  GetAllReservationsSuccess,
} from '../actions/reservation.actions';

export interface ReservationState {
  readonly reservations: ReservationDTO[] | null;
  readonly error: string;
}

export const initialReservationState: ReservationState = {
  reservations: null,
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
  }),
  on(AddReservation, (state, { reservation }) => {
    const stateCopy = !!state.reservations ? state.reservations : [];
    return {
      ...state,
      reservations: [...stateCopy, reservation],
      error: 'Modified',
    };
  })
);
