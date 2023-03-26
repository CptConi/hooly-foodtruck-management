import { createSelector } from '@ngrx/store';
import { ReservationDTO } from 'src/app/models/DTOs/reservationDTO.model';
import { FoodTruck } from 'src/app/models/foodtruck.model';
import { Reservation } from 'src/app/models/reservation.model';
import { AppState } from '../app.state';
import { selectFoodTrucksState } from './foodTruck.selectors';

export const selectReservationsState = (state: AppState) => state.reservations;

export const selectAllReservations = createSelector(
  selectReservationsState,
  selectFoodTrucksState,
  (reservationsState, foodTruckState) => {
    if (!reservationsState.reservations || !foodTruckState.foodTrucks) {
      return null;
    }
    return reservationsState.reservations.map((dto) =>
      _toModel(dto, foodTruckState.foodTrucks ?? [])
    );
  }
);

const _toModel = (
  reservation: ReservationDTO,
  foodTrucks: FoodTruck[]
): Reservation => {
  const foodTruck = foodTrucks.find(
    (foodTruck) => foodTruck.id === reservation.foodTruckId
  );
  const { foodTruckId, ...rest } = reservation;
  return {
    ...rest,
    foodTruck: foodTruck,
  };
};
