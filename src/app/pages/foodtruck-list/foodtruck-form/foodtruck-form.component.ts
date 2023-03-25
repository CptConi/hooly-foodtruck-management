import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import FoodType from 'src/app/enums/foodType.enum';
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

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {
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

  public onSubmit() {
    if (this.foodtruckForm.valid) {
      this.toastr.success(
        'Foodtruck ajouté avec succès',
        '',
        toasterGlobalOptions
      );
    }
  }
}
