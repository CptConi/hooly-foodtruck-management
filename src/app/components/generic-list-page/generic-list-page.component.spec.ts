import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CustomTableComponent } from '../custom-table/custom-table.component';
import { GenericListPageComponent } from './generic-list-page.component';

describe('GenericListPageComponent', () => {
  let component: GenericListPageComponent;
  let fixture: ComponentFixture<GenericListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericListPageComponent, CustomTableComponent],
      imports: [MatTableModule, MatPaginatorModule, PipesModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    component.title = 'My List';
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('h2'));
    expect(titleElement.nativeElement.textContent.trim()).toEqual('My List');
  });

  it('should show custom table when data source is available', () => {
    component.dataSource = [{ name: 'Item 1' }, { name: 'Item 2' }];
    fixture.detectChanges();
    const customTable = fixture.debugElement.query(
      By.directive(CustomTableComponent)
    );
    expect(customTable).toBeTruthy();
  });

  it('should pass data source to custom table when available', () => {
    component.dataSource = [{ name: 'Item 1' }, { name: 'Item 2' }];
    fixture.detectChanges();
    const customTable = fixture.debugElement.query(
      By.directive(CustomTableComponent)
    );
    expect(customTable.componentInstance.data).toEqual(component.dataSource);
  });
});
