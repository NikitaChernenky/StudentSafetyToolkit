import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReminderPageRoutingModule } from './reminder-routing.module';

import { ReminderPage } from './reminder.page';
import { NgCalendarModule  } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReminderPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [ReminderPage],
  entryComponents: [
    ReminderPage
  ]
})
export class ReminderPageModule {}
