import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


import { IncidentDisclaimerPage } from './incident-disclaimer.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentDisclaimerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IncidentDisclaimerPage]
})
export class IncidentDisclaimerPageModule {}
