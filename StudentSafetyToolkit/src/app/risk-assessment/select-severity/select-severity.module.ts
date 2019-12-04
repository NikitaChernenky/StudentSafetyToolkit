import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectSeverityPageRoutingModule } from './select-severity-routing.module';

import { SelectSeverityPage } from './select-severity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectSeverityPageRoutingModule
  ],
  declarations: [SelectSeverityPage]
})
export class SelectSeverityPageModule {}
