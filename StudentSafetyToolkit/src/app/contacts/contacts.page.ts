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
  contacts: Contact[];
  emailAddress = '';
  constructor(private dataService: MetadataService, private emailComposer: EmailComposer, private router: Router) { }

  ngOnInit() {
    this.getContacts();
  }


  getContacts(): void {
    this.dataService.getContactsData()
      .subscribe(contacts => this.contacts = contacts);
  }

  getEmailAddress(contactName: string) {
    switch (contactName) {
      case 'Campus Security': {
        return 'campussecurity@uregina.ca';
        break;
      }
      case 'Science Faculty Safety Department': {
        return 'sciencesafety@uregina.ca';
        break;
      }
      case 'UofR Safety Department': {
        return 'uofrsafety@uregina.ca';
        break;
      }
      default: {
        return '';
        break;
     }
    }
  }


      continueToEmail(contactName: string) {
      const emailAddress = this.getEmailAddress(contactName);
      const email = {
      to: emailAddress,
      isHtml: true
    };
      this.emailComposer.open(email);
  }


}
