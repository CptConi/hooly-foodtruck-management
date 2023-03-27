import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { CustomTableComponent } from './custom-table.component';

describe('CustomTableComponent', () => {
  let component: CustomTableComponent;
  let fixture: ComponentFixture<CustomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatPaginatorModule,
        MatTableModule,
        PipesModule,
        BrowserAnimationsModule,
      ],
      declarations: [CustomTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the data source correctly', () => {
    const data = [
      { id: 1, name: 'Food Truck 1', foodType: '🌮', rating: 4.5 },
      { id: 2, name: 'Food Truck 2', foodType: '🍣', rating: 4.2 },
      { id: 3, name: 'Food Truck 3', foodType: '🥗', rating: 4.9 },
    ];
    component.data = data;

    expect(component.dataSource.data).toEqual(data);
  });

  it('should get the correct columns', () => {
    const data = [
      { id: 1, name: 'Food Truck 1', foodType: '🌮', rating: 4.5 },
      { id: 2, name: 'Food Truck 2', foodType: '🍣', rating: 4.2 },
      { id: 3, name: 'Food Truck 3', foodType: '🥗', rating: 4.9 },
    ];
    component.data = data;

    const expectedColumns = ['name', 'foodType', 'rating'];

    expect(component.columns).toEqual(expectedColumns);
  });
});
