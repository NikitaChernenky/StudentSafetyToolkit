/*
Mykyta Chernenky
CS 455 - Mobile Computing
PLEASE NOTE: Parts of this code were taken from https://devdactic.com/ionic-4-calendar-app/
*/

import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {

  event = { //this is basically a default constructor/ It initiates calendar variables with empty string.
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString(); //assigns today's date and converts it t string

  eventSource = []; //initiate even source array
  viewTitle;

  calendar = { //default calendar 
    mode: 'month', // default view is month
    currentDate: new Date(), 
  };

  @ViewChild(CalendarComponent, {static: false}) myCal: CalendarComponent; // open CalendarComponent via 'lazy loading'

  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.resetEvent(); //make sure that New Event's fields are empty on load
  }

  resetEvent() { //reset new event fields
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }


  addEvent() {   // Create event in the correct format, push it to the source(database) and reset new even fields
    const eventCopy = { //copy all values
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    };

    if (eventCopy.allDay) { // if the event is set for all day
      const start = eventCopy.startTime;
      const end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate())); //today's date
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1)); //tomorrow's date
    }

    this.eventSource.push(eventCopy); //add the event to the source (database)
    this.myCal.loadEvents(); //load events from the database
    this.resetEvent(); //reset new even fields
  }

  next() { //for swiping right to see the next month/week
    const swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() { //for swiping left to see the previous month/week
    const swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Change mode between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Focus on today
  today() {
    this.calendar.currentDate = new Date();
  }

  // Changes title when changing month/week/day
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    const start = formatDate(event.startTime, 'medium', this.locale); //start date selected
    const end = formatDate(event.endTime, 'medium', this.locale); //end date selected

    const alert = await this.alertCtrl.create({ //creates alert in the applciation
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present(); //shows alert in the app
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    const selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }
}
