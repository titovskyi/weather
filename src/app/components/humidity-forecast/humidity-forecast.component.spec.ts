import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityForecastComponent } from './humidity-forecast.component';

describe('HumidityForecastComponent', () => {
  let component: HumidityForecastComponent;
  let fixture: ComponentFixture<HumidityForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumidityForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
