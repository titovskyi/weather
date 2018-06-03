import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { DailyForecast } from '../class/daily-forecast';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  public selectedOption = 'London,UK';
  public url = 'https://api.weatherbit.io/v2.0/current?city=' + this.selectedOption + '&key=ccd2e1eddafd40438888612661686d96';
  public urlAll = 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + this.selectedOption + '&key=ccd2e1eddafd40438888612661686d96';

  selectedOptionChange: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {
  }

  public getCurrent(): Observable<any> {
    return this.http.get(this.url).pipe(map(this.extractData));
  }

  public getForecast(): Observable<any> {
    return this.http.get(this.urlAll).pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    const body = Object.values(res);
    return body[0] || [];
  }

  public getCity(city) {
    this.url = 'https://api.weatherbit.io/v2.0/current?city=' + city + '&key=ccd2e1eddafd40438888612661686d96';
    this.urlAll = 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + city + '&key=ccd2e1eddafd40438888612661686d96';
    this.selectedOptionChange.next(this.selectedOption);
  }
}
