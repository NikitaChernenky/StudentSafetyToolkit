import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResultListPage } from '../result-list/result-list.page';

@Component({
  selector: 'app-severity-detail',
  templateUrl: './severity-detail.page.html',
  styleUrls: ['./severity-detail.page.scss'],
})
export class SeverityDetailComponent implements OnInit {
  @Input() severity: number;
  public severityStr: string;
  constructor() {}


  ngOnInit() {
    this.selectSeverity(this.severity);
  }
  selectSeverity(severity: number) {
    switch (severity) {
      case 0:
        this.severityStr = 'MINOR';
        /*
        this.emergency = ``;
        this.communication = ``;
        this.bulletin = ``;
        this.reporting = ``;
        */
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
