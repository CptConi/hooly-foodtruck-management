import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { ReservationDTO } from '../models/DTOs/reservationDTO.model';
import { Reservation } from '../models/reservation.model';
import {
  AddReservation,
  GetAllReservationsSuccess,
} from '../store/actions/reservation.actions';
import { ReservationState } from '../store/reducers/reservation.reducer';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiURL = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private store: Store<ReservationState>
  ) {}

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<ReservationDTO[]>(`${this.apiURL}/reservations`).pipe(
      tap((reservations) => {
        this.store.dispatch(GetAllReservationsSuccess(reservations));
      })
    );
  }

  public addReservation(reservation: ReservationDTO): Observable<Reservation> {
    return this.http
      .post<ReservationDTO>(`${this.apiURL}/reservations`, reservation)
      .pipe(
        tap((addedFoodTruck) => {
          this.store.dispatch(AddReservation(addedFoodTruck));
        })
      );
  }
}
