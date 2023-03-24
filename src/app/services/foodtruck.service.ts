import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { FoodTruck } from '../models/foodtruck.model';
import { GetAllFoodTrucksSuccess } from '../store/actions/foodTruck.actions';
import { FoodTruckState } from '../store/reducers/foodTruck.reducer';

@Injectable({
  providedIn: 'root',
})
export class FoodTruckService {
  private apiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private store: Store<FoodTruckState>) {}

  getAllFoodTrucks(): Observable<FoodTruck[]> {
    return this.http.get<FoodTruck[]>(`${this.apiURL}/foodTrucks`).pipe(
      tap((foodTrucks) => {
        this.store.dispatch(GetAllFoodTrucksSuccess(foodTrucks));
      })
    );
  }
}
