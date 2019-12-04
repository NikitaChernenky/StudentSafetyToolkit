import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiskAssessmentPage } from './risk-assessment.page';

const routes: Routes = [
  {
    path: '',
    component: RiskAssessmentPage
  },
  {
    path: 'select-severity',
    loadChildren: () => import('./select-severity/select-severity.module').then( m => m.SelectSeverityPageModule)
  },
  {
    path: 'result-list',
    loadChildren: () => import('./result-list/result-list.module').then( m => m.ResultListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiskAssessmentPageRoutingModule {}
