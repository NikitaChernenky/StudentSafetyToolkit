/*
  Mykyta Chernenky
  CS 455
  Report Incident page
*/


import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/services/metadata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.page.html',
  styleUrls: ['./risk-assessment.page.scss'],
})
export class RiskAssessmentPage implements OnInit {
  constructor(
    private router: Router,
    public metaDataService: MetadataService
  ) {}

  ngOnInit() {}

  SelectType(type: number) { // select type of action or task
    this.metaDataService.SelectedType = this.metaDataService.Types[type]; // assign to selected type from dataservice 
    this.router.navigate(['/select-severity']); // navigate to select severity
  }
}
