import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiskAssessmentPage } from './risk-assessment.page';

const routes: Routes = [
  {
    path: '',
    component: RiskAssessmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiskAssessmentPageRoutingModule {}
