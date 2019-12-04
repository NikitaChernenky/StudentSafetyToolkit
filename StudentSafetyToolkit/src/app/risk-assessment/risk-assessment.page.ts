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

  SelectType(type: number) {
    this.metaDataService.SelectedType = this.metaDataService.Types[type];
    this.router.navigate(['/select-severity']);
  }
}
