import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HumanizeService } from 'src/app/services/humanize.service';

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
    return this._dataSource.data;
  }

  get columns(): string[] {
    return this.data ? this.filterColumns(Object.keys(this.data[0])) : [];
  }

  @Input() paginationOptions: number[] = [5, 10, 25, 100];
  @Input() defaultPageSize: number = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private humanizeService: HumanizeService) {}

  ngAfterViewInit() {
    this.bindPaginator();
  }

  private filterColumns(columns: string[]): string[] {
    return columns.filter((column) => column !== 'id');
  }

  private bindPaginator() {
    this._dataSource.paginator = this.paginator;
    this._dataSource.paginator.pageSize = this.defaultPageSize;
  }
}
