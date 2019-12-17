/*
Mykyta Chernenky
CS 455 - Mobile Computing
Report Incident Page
*/

import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/services/metadata.service';
import { Router } from '@angular/router';
import { Incident } from '../interfaces/metadata';

@Component({
  selector: 'app-report-incident',
  templateUrl: './report-incident.page.html',
  styleUrls: ['./report-incident.page.scss']
})
export class ReportIncidentPage implements OnInit {
  incidents: Incident[]; //list of incidents
  constructor(private router: Router, public dataService: MetadataService) {}

  ngOnInit() {
    this.getIncidents(); //when page loaded, load list of incidents
  }

  getIncidents(): void { //retrieve list of incidents from the dataservice file
    this.dataService
      .getIncidentsData()
      .subscribe(incidents => (this.incidents = incidents));
  }

  continueToForm(inicdentType: string) { //once the incident selected, pass in the incident time to the next page(Report Incident Form)
    this.router.navigate(['/form', inicdentType]);
  }
}
