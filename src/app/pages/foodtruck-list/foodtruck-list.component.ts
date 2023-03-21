import { Component } from '@angular/core';
import FoodType from 'src/app/enums/foodType.enum';
import { FoodTruck } from 'src/app/models/foodtruck.model';

@Component({
  selector: 'app-foodtruck-list',
  templateUrl: './foodtruck-list.component.html',
  styleUrls: ['./foodtruck-list.component.scss'],
})
export class FoodtruckListComponent {
  public foodTrucks: FoodTruck[] = [];

  constructor() {
    this.foodTrucks = this.mockFoodTrucks();
  }

  /** Mocks 5 trucks according to FoodTruck model */
  private mockFoodTrucks(): FoodTruck[] {
    return [
      {
        id: 1,
        name: 'Holy Cow!',
        description:
          'Des burgers délicieux et juteux avec des garnitures à tomber par terre. Vous allez adorer ce que nous avons entre nos pains.',
        image: 'https://via.placeholder.com/150',
        rating: 4.7,
        foodType: FoodType.BURGER,
      },
      {
        id: 2,
        name: 'Pasta la Vista',
        description:
          'Nous apportons la cuisine italienne à vous. De délicieuses pâtes cuites à la perfection, accompagnées de sauces savoureuses pour une expérience gustative qui vous fera dire "wow!',
        image: 'https://via.placeholder.com/150',
        rating: 4.4,
        foodType: FoodType.PASTA,
      },
      {
        id: 3,
        name: 'Slice, Slice Baby',
        description:
          'Des pizzas délicieuses avec une pâte moelleuse et des garnitures fraîches et de qualité supérieure. Nous sommes sûrs que vous reviendrez pour une autre part.',
        image: 'https://via.placeholder.com/150',
        rating: 4.6,
        foodType: FoodType.PIZZA,
      },
      {
        id: 4,
        name: 'Salad Days',
        description:
          'Nous croyons en la fraîcheur, la nourriture saine et des ingrédients de qualité. Venez déguster nos salades délicieuses et copieuses pour vous sentir frais et heureux toute la journée.',
        image: 'https://via.placeholder.com/150',
        rating: 4.5,
        foodType: FoodType.SALAD,
      },
      {
        id: 5,
        name: '"Rollin\' in the Deep',
        description:
          'Du riz moelleux, des ingrédients frais et des sushis préparés avec soin. Plongez dans notre menu pour des sensations gustatives incroyables et des rolls qui vous laisseront bouche bée.',
        image: 'https://via.placeholder.com/150',
        rating: 4.9,
        foodType: FoodType.SUSHI,
      },
    ];
  }
}
