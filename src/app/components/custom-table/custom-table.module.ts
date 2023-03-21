import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HumanizePipe } from 'src/app/pipes/humanize.pipe';
import { CustomTableComponent } from './custom-table.component';

@NgModule({
  declarations: [CustomTableComponent, HumanizePipe],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  exports: [CustomTableComponent],
})
export class CustomTableModule {}
