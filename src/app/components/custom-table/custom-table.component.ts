import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent implements AfterViewInit {
  private _dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(
    []
  );
  get dataSource(): MatTableDataSource<any> {
    return this._dataSource;
  }

  @Input() set data(value: any[]) {
    this._dataSource = new MatTableDataSource<any>(value);
  }
  get data(): any[] {
    return this._dataSource.data || [];
  }

  get columns(): string[] {
    return this.data.length
      ? this.sortColumns(this.filterColumns(Object.keys(this.data[0])))
      : [];
  }

  @Input() paginationOptions: number[] = [5, 10, 25, 100];
  @Input() set defaultPageSize(value: number) {
    if (!this._dataSource.paginator) return;
    this._dataSource.paginator.pageSize = value;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.bindPaginator();
  }

  private filterColumns(columns: string[]): string[] {
    return columns.filter((column) => column !== 'id');
  }

  private bindPaginator() {
    this._dataSource.paginator = this.paginator;
  }

  /**
   * Will sort columns to always have image, name and description at the beginning and rating at the end
   */
  private sortColumns(columns: string[]): string[] {
    const sortedColumns: string[] = [];

    if (columns.includes('image')) {
      sortedColumns.push('image');
    }

    if (columns.includes('name')) {
      sortedColumns.push('name');
    }

    if (columns.includes('description')) {
      sortedColumns.push('description');
    }

    for (const col of columns) {
      if (
        col !== 'image' &&
        col !== 'name' &&
        col !== 'description' &&
        col !== 'rating'
      ) {
        sortedColumns.push(col);
      }
    }
    if (columns.includes('rating')) {
      sortedColumns.push('rating');
    }

    return sortedColumns;
  }
}
