import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportIncidentPage } from './report-incident.page';

describe('ReportIncidentPage', () => {
  let component: ReportIncidentPage;
  let fixture: ComponentFixture<ReportIncidentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportIncidentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportIncidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
