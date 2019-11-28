import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/metadata';
import { Router } from '@angular/router';
import { MetadataService } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: Contact[];
  constructor(private dataService: MetadataService, private router: Router) { }

  ngOnInit() {
    this.getContacts();
  }


  getContacts(): void {
    this.dataService.getContactsData()
      .subscribe(contacts => this.contacts = contacts);
  }

  continueToEmail() {
    this.router.navigate(['/email']);
  }


}
