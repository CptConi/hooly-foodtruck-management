import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation.model';
import { GetAllReservations } from 'src/app/store/actions/reservation.actions';
import { AppState } from 'src/app/store/app.state';
import { selectAllReservations } from 'src/app/store/selectors/reservation.selectors';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss'],
})
export class ReservationListComponent implements OnInit {
  public reservations$!: Observable<Reservation[]>;

  public Array = Array;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(GetAllReservations());
    this.reservations$ = this.store.select(selectAllReservations);
  }
}
