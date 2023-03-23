import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CustomTableModule } from '../custom-table/custom-table.module';
import { GenericListPageComponent } from './generic-list-page.component';

@NgModule({
  declarations: [GenericListPageComponent],
  imports: [CommonModule, CustomTableModule, MatProgressSpinnerModule],
  exports: [GenericListPageComponent],
})
export class GenericListPageModule {}
