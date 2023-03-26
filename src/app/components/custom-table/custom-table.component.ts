import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent {
  private _dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(
    []
  );
  get dataSource(): MatTableDataSource<any> {
    return this._dataSource;
  }

  @Input() sortColumns: (columns?: string[]) => string[] = (
    columns?: string[]
  ) => columns ?? [];

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

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    this.bindPaginator(paginator);
  }

  private filterColumns(columns: string[]): string[] {
    return columns.filter((column) => column !== 'id');
  }

  private bindPaginator(paginator: MatPaginator) {
    this._dataSource.paginator = paginator;
  }
}
