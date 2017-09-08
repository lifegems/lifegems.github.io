import { NgModule } from '@angular/core';

import { ConverterModule } from './converter/converter.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { KingsModule     } from './kings/kings.module';
import { SchedulesModule } from './schedules/schedules.module';
import { TimelineModule  } from './timeline/timeline.module';

@NgModule({
   imports: [
      ConverterModule,
      DashboardModule,
      KingsModule,
      SchedulesModule,
      TimelineModule,
   ]
})
export class PagesModule {}