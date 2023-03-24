import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FoodTruck } from 'src/app/models/foodtruck.model';
import { GetAllFoodTrucks } from 'src/app/store/actions/foodTruck.actions';
import { AppState } from 'src/app/store/app.state';
import { selectAllFoodTrucks } from 'src/app/store/selectors/foodTruck.selectors';

@Component({
  selector: 'app-foodtruck-list',
  templateUrl: './foodtruck-list.component.html',
  styleUrls: ['./foodtruck-list.component.scss'],
})
export class FoodtruckListComponent implements OnInit {
  public foodTrucks$!: Observable<FoodTruck[]>;
  public isFormVisible = true;

  public Array = Array;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(GetAllFoodTrucks());
    this.foodTrucks$ = this.store.select(selectAllFoodTrucks);
  }

  public handleAddButtonClick() {
    this.isFormVisible = true;
  }
}
