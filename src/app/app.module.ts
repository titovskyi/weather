import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TypeaheadModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'angular-highcharts';

import { WeatherForecastService } from './services/weather-forecast.service';

import { AppComponent } from './app.component';
import { MainForecastComponent } from './components/main-forecast/main-forecast.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { WindForecastComponent } from './components/wind-forecast/wind-forecast.component';
import { TempForecastComponent } from './components/temp-forecast/temp-forecast.component';
import { PresureForecastComponent } from './components/presure-forecast/presure-forecast.component';
import { HumidityForecastComponent } from './components/humidity-forecast/humidity-forecast.component';
registerLocaleData(localeEn, 'en');

@NgModule({
  declarations: [
    AppComponent,
    MainForecastComponent,
    WindForecastComponent,
    TempForecastComponent,
    PresureForecastComponent,
    HumidityForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TypeaheadModule.forRoot(),
    TabsModule.forRoot(),
    ChartModule
  ],
  providers: [
    WeatherForecastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
