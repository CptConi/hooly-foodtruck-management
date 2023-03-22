import { Component, OnInit } from '@angular/core';
import { FoodTruck } from 'src/app/models/foodtruck.model';
import { FoodtruckService } from 'src/app/services/foodtruck.service';

@Component({
  selector: 'app-foodtruck-list',
  templateUrl: './foodtruck-list.component.html',
  styleUrls: ['./foodtruck-list.component.scss'],
})
export class FoodtruckListComponent implements OnInit {
  public foodTrucks: FoodTruck[] = [];

  constructor(private foodTruckService: FoodtruckService) {}

  ngOnInit(): void {
    this.foodTruckService.getAll().subscribe((foodTrucks) => {
      this.foodTrucks = foodTrucks;
    });
  }
}
