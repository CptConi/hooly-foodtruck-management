import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodTruckListRoutingModule } from './foodtruck-list-routing.module';
import { FoodtruckListComponent } from './foodtruck-list.component';

@NgModule({
  imports: [CommonModule, RouterModule, FoodTruckListRoutingModule],
  declarations: [FoodtruckListComponent],
})
export class FoodTruckListModule {}
