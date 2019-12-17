/*
Mykyta Chernenky
CS 455 - Mobile Computing
Select Severity Form
*/
import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/services/metadata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-severity',
  templateUrl: './select-severity.page.html',
  styleUrls: ['./select-severity.page.scss'],
})
export class SelectSeverityPage implements OnInit {

  constructor(
    public dataService: MetadataService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  SelectSeverity(index: number) { // When user click the severity, send it as a parameter to the Result List Page
    const url = 'result-list/' + index;
    this.router.navigate([url]);
  }

}
