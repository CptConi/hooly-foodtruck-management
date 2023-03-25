import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { FoodTruck } from '../models/foodtruck.model';
import {
  AddFoodTruck,
  GetAllFoodTrucksSuccess,
} from '../store/actions/foodTruck.actions';
import { FoodTruckState } from '../store/reducers/foodTruck.reducer';

@Injectable({
  providedIn: 'root',
})
export class FoodTruckService {
  private apiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private store: Store<FoodTruckState>) {}

  public getAllFoodTrucks(): Observable<FoodTruck[]> {
    return this.http.get<FoodTruck[]>(`${this.apiURL}/foodTrucks`).pipe(
      tap((foodTrucks) => {
        this.store.dispatch(GetAllFoodTrucksSuccess(foodTrucks));
      })
    );
  }

  public addFoodTruck(foodTruck: FoodTruck): Observable<FoodTruck> {
    return this.http
      .post<FoodTruck>(`${this.apiURL}/foodTrucks`, foodTruck)
      .pipe(
        tap((addedFoodTruck) => {
          this.store.dispatch(AddFoodTruck(addedFoodTruck));
        })
      );
  }
}
