import { createAction } from '@ngrx/store';
import { Reservation } from 'src/app/models/reservation.model';

export const GetAllReservations = createAction(
  '[Reservation] Get All Reservations'
);

export const GetAllReservationsSuccess = createAction(
  '[Reservation] Get All Reservations Success',
  (reservations: Reservation[]) => ({ reservations })
);
