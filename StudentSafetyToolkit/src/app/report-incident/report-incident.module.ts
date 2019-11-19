import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportIncidentPageRoutingModule } from './report-incident-routing.module';

import { ReportIncidentPage } from './report-incident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportIncidentPageRoutingModule
  ],
  declarations: [ReportIncidentPage]
})
export class ReportIncidentPageModule {}
