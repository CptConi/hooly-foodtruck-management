import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CustomTableComponent } from './custom-table.component';

@NgModule({
  declarations: [CustomTableComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, PipesModule],
  exports: [CustomTableComponent],
})
export class CustomTableModule {}
