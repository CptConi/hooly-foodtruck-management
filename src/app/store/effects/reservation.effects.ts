import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ReservationService } from 'src/app/services/reservation.service';
import {
  GetAllReservations,
  GetAllReservationsSuccess,
} from '../actions/reservation.actions';

@Injectable()
export class ReservationEffects {
  constructor(
    private actions$: Actions,
    private reservationService: ReservationService
  ) {}

  getAllReservations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetAllReservations),
      switchMap(() =>
        this.reservationService.getAllReservations().pipe(
          map((reservations) => {
            return {
              type: GetAllReservationsSuccess.type,
              reservations,
            };
          })
        )
      )
    )
  );
}
