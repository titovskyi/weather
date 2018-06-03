import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresureForecastComponent } from './presure-forecast.component';

describe('PresureForecastComponent', () => {
  let component: PresureForecastComponent;
  let fixture: ComponentFixture<PresureForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresureForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresureForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
