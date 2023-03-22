import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
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

  public getAll(): Observable<Reservation[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.mockReservations());
        observer.complete();
      }, 150);
    });
  }
}
