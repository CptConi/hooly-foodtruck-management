import MealType from '../../enums/mealType';

export interface ReservationDTO {
  id: number;
  date: Date;
  location: string;
  meal: MealType;
  foodTruckId: number;
}
