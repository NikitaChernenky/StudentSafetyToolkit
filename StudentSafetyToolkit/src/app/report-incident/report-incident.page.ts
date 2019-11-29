import { Component, OnInit } from "@angular/core";
import { MetadataService } from "src/app/services/metadata.service";
import { Router } from "@angular/router";
import { Incident } from "../interfaces/metadata";

@Component({
  selector: "app-report-incident",
  templateUrl: "./report-incident.page.html",
  styleUrls: ["./report-incident.page.scss"]
})
export class ReportIncidentPage implements OnInit {
  incidents: Incident[];
  constructor(private router: Router, public dataService: MetadataService) {}

  ngOnInit() {
    this.getIncidents();
  }

  getIncidents(): void {
    this.dataService
      .getIncidentsData()
      .subscribe(incidents => (this.incidents = incidents));
  }

  continueToForm(inicdentType: string) {
    this.router.navigate(["/form", inicdentType]);
  }
  /*
  SelectType(type: number) {
    this.metaDataService.SelectedType = this.metaDataService.Types[type];
    this.router.navigate(['/select-severity']);
  }*/
}
