import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-list-page',
  templateUrl: './generic-list-page.component.html',
  styleUrls: ['./generic-list-page.component.scss'],
})
export class GenericListPageComponent {
  @Input() public dataSource: any[] | null = [];
  @Input() public title: string = '';
  @Input() sortColumns: (columns?: string[]) => string[] = (
    columns?: string[]
  ) => columns ?? [];
  @Input() public paginationOptions: number[] = [];
  @Input() public defaultPageSize: number = 10;
}
