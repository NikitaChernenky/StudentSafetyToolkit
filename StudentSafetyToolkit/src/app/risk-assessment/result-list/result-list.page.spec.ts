import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultListPage } from './result-list.page';

describe('ResultListPage', () => {
  let component: ResultListPage;
  let fixture: ComponentFixture<ResultListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
