import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { FoodTruckService } from 'src/app/services/foodtruck.service';
import {
  GetAllFoodTrucks,
  GetAllFoodTrucksSuccess,
} from '../actions/foodTruck.actions';

@Injectable()
export class FoodTruckEffects {
  constructor(
    private actions$: Actions,
    private foodTruckService: FoodTruckService
  ) {}

  getAllFoodTrucks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetAllFoodTrucks),
      switchMap(() =>
        this.foodTruckService.getAllFoodTrucks().pipe(
          map((foodTrucks) => {
            return {
              type: GetAllFoodTrucksSuccess.type,
              foodTrucks,
            };
          })
        )
      )
    )
  );
}
