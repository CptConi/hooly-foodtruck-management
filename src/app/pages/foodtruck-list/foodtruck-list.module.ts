import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomTableModule } from 'src/app/components/custom-table/custom-table.module';
import { FoodTruckListRoutingModule } from './foodtruck-list-routing.module';
import { FoodtruckListComponent } from './foodtruck-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // Components Modules
    FoodTruckListRoutingModule,
    CustomTableModule,
  ],
  declarations: [FoodtruckListComponent],
})
export class FoodTruckListModule {}
