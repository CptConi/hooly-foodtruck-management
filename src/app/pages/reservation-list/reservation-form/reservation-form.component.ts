import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import ReservationDurationType from 'src/app/enums/reservationDurationType.enums';
import { FoodTruck } from 'src/app/models/foodtruck.model';
import { toasterGlobalOptions } from 'src/app/settings/toastr.config';
import { AppState } from 'src/app/store/app.state';
import { selectAllFoodTrucks } from 'src/app/store/selectors/foodTruck.selectors';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  // !! Important: the style file is imported in the list-forms.style.scss file
  styleUrls: ['../../list-forms.style.scss'],
})
export class ReservationFormComponent {
  public reservationForm: FormGroup = new FormGroup({});
  public foodTrucks$!: Observable<FoodTruck[]>;
  public reservationDurationKeys = Object.keys(ReservationDurationType);

  @Output() hideForm: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.foodTrucks$ = this.store.select(selectAllFoodTrucks);

    this.reservationForm = this.formBuilder.group({
      foodTruckId: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      duration: ['', Validators.required],
    });
  }

  public handleCancelButtonClick() {
    this.reservationForm.reset();
    this.hideForm.emit(false);
  }

  public onSubmit() {
    if (this.reservationForm.valid) {
      this.toastr.success(
        'Reservation ajoutée avec succès',
        '',
        toasterGlobalOptions
      );
    }
  }
}
