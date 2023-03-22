import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomTableModule } from 'src/app/components/custom-table/custom-table.module';
import { ReservationListRoutingModule } from './reservation-list-routing.module';
import { ReservationListComponent } from './reservation-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // Components modules
    ReservationListRoutingModule,
    CustomTableModule,
  ],
  declarations: [ReservationListComponent],
})
export class ReservationListModule {}
