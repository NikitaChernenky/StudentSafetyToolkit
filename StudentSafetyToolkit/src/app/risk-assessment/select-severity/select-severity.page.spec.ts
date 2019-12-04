import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectSeverityPage } from './select-severity.page';

describe('SelectSeverityPage', () => {
  let component: SelectSeverityPage;
  let fixture: ComponentFixture<SelectSeverityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSeverityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectSeverityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
