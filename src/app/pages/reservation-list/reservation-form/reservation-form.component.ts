import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import MealType from 'src/app/enums/mealType';
import { FoodTruck } from 'src/app/models/foodtruck.model';
import { ReservationService } from 'src/app/services/reservation.service';
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
  public foodTrucks$!: Observable<FoodTruck[] | null>;
  public reservationDurationKeys = Object.keys(MealType);

  @Output() hideForm: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private reservationService: ReservationService
  ) {
    this.foodTrucks$ = this.store.select(selectAllFoodTrucks);

    this.reservationForm = this.formBuilder.group({
      foodTruckId: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      meal: ['', Validators.required],
    });
  }

  get today() {
    return new Date();
  }

  public handleCancelButtonClick() {
    this.reservationForm.reset();
    this.hideForm.emit(false);
  }

  private toDTO() {
    return {
      id: -1,
      foodTruckId: this.reservationForm.value.foodTruckId,
      date: this.reservationForm.value.date,
      location: this.reservationForm.value.location,
      meal: this.reservationForm.value.meal,
    };
  }

  public onSubmit() {
    if (this.reservationForm.valid) {
      this.reservationService
        .addReservation(this.toDTO())
        .subscribe((mockResponse: any) => {
          if (!!mockResponse) {
            this.toastr.success(
              'Réservation ajoutée avec succès',
              '',
              toasterGlobalOptions
            );
            this.hideForm.emit(false);
          } else {
            this.toastr.error(
              "Une erreur est survenue lors de l'ajout de la réservation",
              '',
              toasterGlobalOptions
            );
          }
        });
    }
  }
}
