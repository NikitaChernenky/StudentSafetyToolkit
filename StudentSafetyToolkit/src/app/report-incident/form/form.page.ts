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
  public maxDate = '';
  public fieldA = '';
  public fieldC = '';
  public fieldD = '';
  public location = '';
  public date = '';
  public title = '';

  routeParams: Params;

  constructor(private router: Router,  private emailComposer: EmailComposer, private activatedRoute: ActivatedRoute) {
    this.getRouteParams();
   }

   getRouteParams() {

    // Route parameters
    this.activatedRoute.params.subscribe( params => {
        this.routeParams = params;
    });
  }

    ngOnInit() {
      this.title = this.routeParams.title;
    // get a value for max date
      const now = new Date();
      this.maxDate =
      now.getFullYear() +
      '-' +
      String(now.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(now.getDate()).padStart(2, '0');

    // read the passed in variable (title of incident)
    // this.activatedRoute.params.subscribe(params => {
    //  this.title = params.get('title');
    //  });

  }

    email() {
    const readableDate = this.date.replace(/T/, ' ').replace(/\..+/, '');

    const email = {
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
    this.emailComposer.open(email);

}


}
