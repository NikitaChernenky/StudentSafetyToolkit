import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/metadata';
import { MetadataService } from 'src/app/services/metadata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident-disclaimer',
  templateUrl: './incident-disclaimer.page.html',
  styleUrls: ['./incident-disclaimer.page.scss'],
})
export class IncidentDisclaimerPage implements OnInit {
  contacts: Contact[];

  constructor(private dataService: MetadataService, private router: Router) {}

  ngOnInit() {
    this.getContacts();
  }

  continueToReportIncident() {
    this.router.navigate(['/report-incident']);
  }

  getContacts(): void {
    this.dataService
      .getContactsFrontPageData()
      .subscribe(contacts => (this.contacts = contacts));
  }
}
