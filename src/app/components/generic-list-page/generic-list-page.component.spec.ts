import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericListPageComponent } from './generic-list-page.component';

describe('GenericListPageComponent', () => {
  let component: GenericListPageComponent;
  let fixture: ComponentFixture<GenericListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
