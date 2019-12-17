/*
Mykyta Chernenky
CS 455 - Mobile Computing
Report Incident Form
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit { 
  //initiate Report Incident Form fields
  public maxDate = '';
  public fieldA = '';
  public fieldC = '';
  public fieldD = '';
  public location = '';
  public date = '';
  public title = '';

  routeParams: Params; //to received passed in parameter from the previous tab

  constructor(private router: Router,  private emailComposer: EmailComposer, private activatedRoute: ActivatedRoute) {
    this.getRouteParams(); //get paramenter from previous tab
   }

   getRouteParams() { //get passed in route paramenter from previous tab

    // Route parameters
    this.activatedRoute.params.subscribe( params => {
        this.routeParams = params;
    });
  }

    ngOnInit() {
      this.title = this.routeParams.title; //set to title to the parameter value
    // get a value for max date
      const now = new Date(); //current date
      //max date you can select
      this.maxDate = 
      now.getFullYear() +
      '-' +
      String(now.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(now.getDate()).padStart(2, '0');

  }

    email() { //initiate email
    const readableDate = this.date.replace(/T/, ' ').replace(/\..+/, ''); //convert timestamp data into a readable format

    const email = { //prepopulated email fields
    to: 'campusserity@uregina.ca',
    subject: `Report - ${this.title}`,
    body: `<b>The names of each person invoved/b> <br \>
    ${this.fieldA} <br /><br />
    <b>Date:</b> ${readableDate} <br \>
    <b>Location:</b> ${this.location} <br \><br />
    <b>The circumstances related to the  occurrence:</b> <br \>
    ${this.fieldC} <br \><br \>
    <b>Nunc ut lectus non neque efficitur sagittis et sit amet dolor. Duis
    eget luctus ante. Morbi tincidunt quam et lorem mattis fermentum. Donec at
    felis ac lacus sodales aliquam nec et quam:</b> <br \>
    ${this.fieldD}`,
    isHtml: true
  };
    this.emailComposer.open(email); //Use EmailComposer to send email with prepopulated fields

}


}
