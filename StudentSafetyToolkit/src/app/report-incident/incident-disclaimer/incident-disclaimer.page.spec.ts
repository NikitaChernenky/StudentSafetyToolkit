import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncidentDisclaimerPage } from './incident-disclaimer.page';

describe('IncidentDisclaimerPage', () => {
  let component: IncidentDisclaimerPage;
  let fixture: ComponentFixture<IncidentDisclaimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentDisclaimerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentDisclaimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
