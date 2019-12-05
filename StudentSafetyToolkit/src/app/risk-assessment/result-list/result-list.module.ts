import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultListPageRoutingModule } from './result-list-routing.module';
import { SeverityDetailComponent } from '../severity-detail/severity-detail.page';

import { ResultListPage } from './result-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultListPageRoutingModule
  ],
  declarations: [ResultListPage, SeverityDetailComponent]
})
export class ResultListPageModule {}
