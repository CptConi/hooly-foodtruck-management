import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import FoodType from 'src/app/enums/foodType.enum';

@Component({
  selector: 'app-foodtruck-form',
  templateUrl: './foodtruck-form.component.html',
  styleUrls: ['./foodtruck-form.component.scss'],
})
export class FoodtruckFormComponent {
  public foodtruckForm: FormGroup = new FormGroup({});
  public foodTypes: string[] = Object.values(FoodType);

  constructor(private formBuilder: FormBuilder) {
    this.foodtruckForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      imageUrl: '',
      foodType: '',
    });
  }

  public onSubmit() {
    if (this.foodtruckForm.valid) {
      console.log(this.foodtruckForm.value);
    }
  }
}
