import { createAction } from '@ngrx/store';
import { ReservationDTO } from 'src/app/models/DTOs/reservationDTO.model';

export const GetAllReservations = createAction(
  '[Reservation] Get All Reservations'
);

export const GetAllReservationsSuccess = createAction(
  '[Reservation] Get All Reservations Success',
  (reservations: ReservationDTO[]) => ({ reservations })
);

export const AddReservation = createAction(
  '[Reservations] Add Reservation',
  (reservation: ReservationDTO) => ({ reservation })
);
