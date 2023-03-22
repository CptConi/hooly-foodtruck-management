import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomTableModule } from '../custom-table/custom-table.module';
import { GenericListPageComponent } from './generic-list-page.component';

@NgModule({
  declarations: [GenericListPageComponent],
  imports: [CommonModule, CustomTableModule],
  exports: [GenericListPageComponent],
})
export class GenericListPageModule {}
