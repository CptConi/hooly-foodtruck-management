import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservationListRoutingModule } from './reservation-list-routing.module';
import { ReservationListComponent } from './reservation-list.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReservationListRoutingModule],
  declarations: [ReservationListComponent],
})
export class ReservationListModule {}
