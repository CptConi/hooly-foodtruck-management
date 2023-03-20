import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodtruckListComponent } from './foodtruck-list.component';

const routes: Routes = [{ path: '', component: FoodtruckListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodTruckListRoutingModule {}
