import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeverityDetailPage } from './severity-detail.page';

describe('SeverityDetailPage', () => {
  let component: SeverityDetailPage;
  let fixture: ComponentFixture<SeverityDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverityDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeverityDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
