import FoodType from '../enums/foodType.enum';

export interface FoodTruck {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  foodType: FoodType;
}
