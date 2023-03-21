import { Pipe, PipeTransform } from '@angular/core';
import { HumanizeService } from '../services/humanize.service';

@Pipe({
  name: 'humanize',
})
export class HumanizePipe implements PipeTransform {
  constructor(private humanizeService: HumanizeService) {}

  transform(value: string): string {
    return this.humanizeService.humanize(value);
  }
}
