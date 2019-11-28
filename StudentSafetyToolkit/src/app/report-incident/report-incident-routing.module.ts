import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportIncidentPage } from './report-incident.page';

const routes: Routes = [
  {
    path: '',
    component: ReportIncidentPage
  },
  {
    path: 'incident-disclaimer',
    loadChildren: () => import('./incident-disclaimer/incident-disclaimer.module').then( m => m.IncidentDisclaimerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportIncidentPageRoutingModule {}
