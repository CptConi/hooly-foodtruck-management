import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import FoodType from 'src/app/enums/foodType.enum';
import { FoodTruck } from 'src/app/models/foodtruck.model';
import { FoodTruckService } from 'src/app/services/foodtruck.service';
import { toasterGlobalOptions } from 'src/app/settings/toastr.config';

@Component({
  selector: 'app-foodtruck-form',
  templateUrl: './foodtruck-form.component.html',
  // !! Important: the style file is imported in the list-forms.style.scss file
  styleUrls: ['../../list-forms.style.scss'],
})
export class FoodtruckFormComponent {
  public foodtruckForm: FormGroup = new FormGroup({});
  public foodTypes: string[] = Object.values(FoodType);

  @Output() hideForm: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private foodtruckService: FoodTruckService
  ) {
    this.foodtruckForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      imageUrl: '',
      foodType: '',
    });
  }

  public handleCancelButtonClick() {
    this.foodtruckForm.reset();
    this.hideForm.emit(false);
  }

  private toModel(): FoodTruck {
    return {
      name: this.foodtruckForm.value.name,
      description: this.foodtruckForm.value.description,
      image: this.foodtruckForm.value.imageUrl,
      foodType: this.foodtruckForm.value.foodType,
      rating: 0, // will be override by the backend
      id: -1, // will be override by the backend
    };
  }

  public onSubmit() {
    if (this.foodtruckForm.valid) {
      this.foodtruckService
        .addFoodTruck(this.toModel())
        .subscribe((mockResponse: FoodTruck) => {
          if (!!mockResponse) {
            this.toastr.success(
              'Foodtruck ajouté avec succès',
              '',
              toasterGlobalOptions
            );
            this.hideForm.emit(false);
          } else {
            this.toastr.error(
              "Une erreur est survenue lors de l'ajout du foodtruck",
              '',
              toasterGlobalOptions
            );
          }
        });
    }
  }
}
