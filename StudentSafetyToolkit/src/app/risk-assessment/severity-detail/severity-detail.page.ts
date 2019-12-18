/*
  Mykyta Chernenky
  CS 455
  Severity-detai.page.ts
*/


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResultListPage } from '../result-list/result-list.page';

@Component({
  selector: 'app-severity-detail',
  templateUrl: './severity-detail.page.html',
  styleUrls: ['./severity-detail.page.scss'],
})
export class SeverityDetailComponent implements OnInit {
  @Input() severity: number; // get passed in variable (number representing severity (0,1,2,3))
  public severityStr: string;
  constructor() {}


  ngOnInit() {
    this.selectSeverity(this.severity); // on load, get severity
  }
  selectSeverity(severity: number) { // switch cases to get severity
    switch (severity) {
      case 0: // if received pass-variable is 0 -> severity is minor
        this.severityStr = 'MINOR';
        break;
      case 1:
        this.severityStr = 'SIGNIFICANT';
        break;
      case 2:
        this.severityStr = 'MAJOR';
        break;
      case 3:
        this.severityStr = 'CRITICAL';
        break;
    }
  }
}
