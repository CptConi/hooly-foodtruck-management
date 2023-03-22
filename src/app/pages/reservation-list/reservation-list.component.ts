import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss'],
})
export class ReservationListComponent {
  public reservations: Reservation[] = [];

  constructor() {
    this.reservations = this.mockReservations();
  }

  private mockReservations(): Reservation[] {
    return [
      {
        id: 1,
        date: new Date(),
        location: '134 Nervous Nuggets Road',
        duration: 1,
        foodTruckId: 1,
      },
      {
        id: 2,
        date: new Date(),
        location: '12 Crazy Fry lane',
        duration: 1,
        foodTruckId: 2,
      },
      {
        id: 3,
        date: new Date(),
        location: '14 Sparkling Pizza road',
        duration: 1,
        foodTruckId: 3,
      },
      {
        id: 4,
        date: new Date(),
        location: '9 Shaken Salad Way',
        duration: 1,
        foodTruckId: 4,
      },
      {
        id: 5,
        date: new Date(),
        location: '22 Precious Poutine Path',
        duration: 1,
        foodTruckId: 5,
      },
    ];
  }
}
