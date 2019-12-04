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

  SelectSeverity(index: number) {
    const url = 'result-list/' + index;
    this.router.navigate([url]);
  }

}
