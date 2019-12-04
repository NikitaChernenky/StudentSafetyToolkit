import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.page.html',
  styleUrls: ['./result-list.page.scss'],
})
export class ResultListPage implements OnInit {

  public severity = 0;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.severity = +this.activatedRoute.snapshot.paramMap.get('severity');
  }
}
