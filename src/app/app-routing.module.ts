import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/reservations', pathMatch: 'full' },
  // Reservations
  {
    path: 'reservations',
    loadChildren: () =>
      import('./pages/reservation-list/reservation-list.module').then(
        (m) => m.ReservationListModule
      ),
  },
  // { path: 'reservations/new', loadChildren: () => import('./pages/reservation-new/reservation-new.module').then(m => m.ReservationNewModule) },
  // { path: 'reservations/:id', loadChildren: () => import('./pages/reservation-detail/reservation-detail.module').then(m => m.ReservationDetailModule) },
  // { path: 'reservations/:id/edit', loadChildren: () => import('./pages/reservation-edit/reservation-edit.module').then(m => m.ReservationEditModule) },

  // Foodtrucks
  {
    path: 'foodtrucks',
    loadChildren: () =>
      import('./pages/foodtruck-list/foodtruck-list.module').then(
        (m) => m.FoodTruckListModule
      ),
  },
  // { path: 'foodtrucks/new', loadChildren: () => import('./pages/foodtruck-new/foodtruck-new.module').then(m => m.TruckNewModule) },
  // { path: 'foodtrucks/:id', loadChildren: () => import('./pages/foodtruck-detail/foodtruck-detail.module').then(m => m.TruckDetailModule) },
  // { path: 'foodtrucks/:id/edit', loadChildren: () => import('./pages/foodtruck-edit/foodtruck-edit.module').then(m => m.TruckEditModule) },

  // Wildcard
  { path: '**', redirectTo: '/reservations' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
