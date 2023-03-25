import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { GenericListPageModule } from 'src/app/components/generic-list-page/generic-list-page.module';
import { ReservationFormModule } from './reservation-form/reservation-form.module';
import { ReservationListRoutingModule } from './reservation-list-routing.module';
import { ReservationListComponent } from './reservation-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    //Material,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    // Components modules
    ReservationListRoutingModule,
    GenericListPageModule,
    ReservationFormModule,
  ],
  declarations: [ReservationListComponent],
})
export class ReservationListModule {}
