import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Reservation } from '../models/reservation.model';
import { GetAllReservationsSuccess } from '../store/actions/reservation.actions';
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
    return this.http.get<Reservation[]>(`${this.apiURL}/reservations`).pipe(
      tap((reservations) => {
        this.store.dispatch(GetAllReservationsSuccess(reservations));
      })
    );
  }
}
