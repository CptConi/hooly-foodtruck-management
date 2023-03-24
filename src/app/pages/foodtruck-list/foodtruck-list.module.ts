import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { GenericListPageModule } from 'src/app/components/generic-list-page/generic-list-page.module';
import { FoodtruckFormModule } from './foodtruck-form/foodtruck-form.module';
import { FoodTruckListRoutingModule } from './foodtruck-list-routing.module';
import { FoodtruckListComponent } from './foodtruck-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    //Material,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    // Components Modules
    FoodTruckListRoutingModule,
    GenericListPageModule,
    FoodtruckFormModule,
  ],
  declarations: [FoodtruckListComponent],
})
export class FoodTruckListModule {}
