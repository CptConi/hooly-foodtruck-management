import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from 'src/app/modules/forms.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ReservationFormComponent } from './reservation-form.component';

@NgModule({
  declarations: [ReservationFormComponent],
  imports: [CommonModule, FormsModule, PipesModule],
  exports: [ReservationFormComponent],
})
export class ReservationFormModule {}
