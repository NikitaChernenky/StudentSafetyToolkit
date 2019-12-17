/*
Mykyta Chernenky
CS 455 - Mobile Computing
PLEASE NOTE: Parts of this code were taken from https://devdactic.com/ionic-4-calendar-app/
*/

import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/metadata';
import { Router } from '@angular/router';
import { MetadataService } from 'src/app/services/metadata.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: Contact[]; //declare a variable of type Contact
  emailAddress = ''; //initiate email with an empty value
  constructor(private dataService: MetadataService, private emailComposer: EmailComposer, private router: Router) { }

  ngOnInit() {
    this.getContacts(); //retrieve contacts when page loads
  }


  getContacts(): void { //retrieves contacts from the service file
    this.dataService.getContactsData()
      .subscribe(contacts => this.contacts = contacts);
  }

  getEmailAddress(contactName: string) { //get Email address to prepopulate native email app with
    switch (contactName) { 
      case 'Campus Security': { //if user user wants to email Campus Security
        return 'campussecurity@uregina.ca'; // prepopulate with this email
        break;
      }
      case 'Science Faculty Safety Department': { //if user user wants to email Science Faculty Safety Department
        return 'sciencesafety@uregina.ca'; // prepopulate with this email
        break;
      }
      case 'UofR Safety Department': { //if user user wants to email UofR Safety Department
        return 'uofrsafety@uregina.ca'; // prepopulate with this email
        break;
      }
      default: { //thsi case will bever trigger, but is implemented for safety reasons
        return '';
        break;
     }
    }
  }


      continueToEmail(contactName: string) { // triggers when user clicks Email button
      const emailAddress = this.getEmailAddress(contactName); //gets eamil address using the above switch case statement
      const email = { //prepoluate fields
      to: emailAddress, //prepopulate email
      isHtml: true
    };
      this.emailComposer.open(email); // opens EmailCopmoser
  }


}
