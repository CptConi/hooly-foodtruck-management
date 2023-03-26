import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { folderAnimation } from 'src/app/animations/folder.animation';
import { Reservation } from 'src/app/models/reservation.model';
import { GetAllFoodTrucks } from 'src/app/store/actions/foodTruck.actions';
import { GetAllReservations } from 'src/app/store/actions/reservation.actions';
import { AppState } from 'src/app/store/app.state';
import { selectAllFoodTrucks } from 'src/app/store/selectors/foodTruck.selectors';
import { selectAllReservations } from 'src/app/store/selectors/reservation.selectors';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss'],
  animations: [folderAnimation],
})
export class ReservationListComponent implements OnInit {
  public reservations$!: Observable<Reservation[] | null>;
  public isFormVisible = false;

  constructor(private store: Store<AppState>) {}

  public handleAddButtonClick() {
    this.mutateFormVisibility(true);
  }

  public mutateFormVisibility(isVisible: boolean) {
    this.isFormVisible = isVisible;
  }

  public getFormState() {
    return this.isFormVisible ? 'visible' : 'hidden';
  }

  ngOnInit(): void {
    this.store.dispatch(GetAllFoodTrucks());
    this.store.select(selectAllFoodTrucks).subscribe((foodTrucks) => {
      if (!!foodTrucks && foodTrucks.length > 0) {
        this.store.dispatch(GetAllReservations());
      }
    });
    this.reservations$ = this.store.select(selectAllReservations);
  }
}
