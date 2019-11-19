import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiskAssessmentPageRoutingModule } from './risk-assessment-routing.module';

import { RiskAssessmentPage } from './risk-assessment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiskAssessmentPageRoutingModule
  ],
  declarations: [RiskAssessmentPage]
})
export class RiskAssessmentPageModule {}
