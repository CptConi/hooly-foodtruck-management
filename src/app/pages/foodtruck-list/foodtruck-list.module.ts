import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenericListPageModule } from 'src/app/components/generic-list-page/generic-list-page.module';
import { FoodTruckListRoutingModule } from './foodtruck-list-routing.module';
import { FoodtruckListComponent } from './foodtruck-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // Components Modules
    FoodTruckListRoutingModule,
    GenericListPageModule,
  ],
  declarations: [FoodtruckListComponent],
})
export class FoodTruckListModule {}
