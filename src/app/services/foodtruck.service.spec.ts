import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { FoodTruckState } from '../store/reducers/foodTruck.reducer';
import { FoodTruckService } from './foodtruck.service';

describe('FoodtruckService', () => {
  let service: FoodTruckService;
  let httpMock: HttpTestingController;
  let store: Store<FoodTruckState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FoodTruckService,
        provideMockStore({
          initialState: { foodTrucks: null, reservations: null },
        }),
      ],
    });
    service = TestBed.inject(FoodTruckService);
    httpMock = TestBed.inject(HttpTestingController);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
