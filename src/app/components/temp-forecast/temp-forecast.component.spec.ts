import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempForecastComponent } from './temp-forecast.component';

describe('TempForecastComponent', () => {
  let component: TempForecastComponent;
  let fixture: ComponentFixture<TempForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
