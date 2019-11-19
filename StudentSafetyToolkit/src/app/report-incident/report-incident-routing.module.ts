import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportIncidentPage } from './report-incident.page';

const routes: Routes = [
  {
    path: '',
    component: ReportIncidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportIncidentPageRoutingModule {}
