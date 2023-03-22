import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenericListPageModule } from 'src/app/components/generic-list-page/generic-list-page.module';
import { ReservationListRoutingModule } from './reservation-list-routing.module';
import { ReservationListComponent } from './reservation-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // Components modules
    ReservationListRoutingModule,
    GenericListPageModule,
  ],
  declarations: [ReservationListComponent],
})
export class ReservationListModule {}
