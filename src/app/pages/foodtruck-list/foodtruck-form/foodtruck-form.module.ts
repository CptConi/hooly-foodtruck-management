import { NgModule } from '@angular/core';
import { FormsModule } from 'src/app/modules/forms.module';
import { FoodtruckFormComponent } from './foodtruck-form.component';

@NgModule({
  declarations: [FoodtruckFormComponent],
  imports: [FormsModule],
  exports: [FoodtruckFormComponent],
})
export class FoodtruckFormModule {}
