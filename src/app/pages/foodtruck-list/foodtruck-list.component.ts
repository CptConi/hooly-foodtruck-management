import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
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
  animations: [
    trigger('formVisibility', [
      state('hidden', style({ height: '0', overflow: 'hidden', opacity: 0 })),
      state('visible', style({ height: '*', opacity: 1 })),
      transition('hidden => visible', animate('300ms ease-out')),
      transition('visible => hidden', animate('300ms ease-out')),
    ]),
  ],
})
export class FoodtruckListComponent implements OnInit {
  public foodTrucks$!: Observable<FoodTruck[]>;
  public isFormVisible = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(GetAllFoodTrucks());
    this.foodTrucks$ = this.store.select(selectAllFoodTrucks);
  }

  public handleAddButtonClick() {
    this.mutateFormVisibility(true);
  }

  public mutateFormVisibility(isVisible: boolean) {
    this.isFormVisible = isVisible;
  }

  public getFormState() {
    return this.isFormVisible ? 'visible' : 'hidden';
  }
}
