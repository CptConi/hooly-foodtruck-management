import { NgModule } from '@angular/core';
import { HumanizePipe } from './humanize.pipe';

@NgModule({
  declarations: [HumanizePipe],
  imports: [],
  exports: [HumanizePipe],
})
export class PipesModule {}
