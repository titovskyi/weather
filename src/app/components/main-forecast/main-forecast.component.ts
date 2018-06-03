import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { WeatherForecastService } from '../../services/weather-forecast.service';
import { includes } from 'lodash';

@Component({
  selector: 'app-main-forecast',
  templateUrl: './main-forecast.component.html',
  styleUrls: ['./main-forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainForecastComponent implements OnInit {

  public dailyForecast = [];
  public sixteenForecast = [];

  public lightRain = [
  'r01d', 'r01n', 'r02d', 'r02n', 'r03d', 'r03n', 'f01d',
  'f01n', 'r04d', 'r04n', 'r05d', 'r05n', 'r06d', 'r06n' ];
  public stormyWeather = [
  't01d', 't01n', 't02d', 't02n', 't03d', 't03n', 't04d',
  't04n', 't05d', 't05n' ];
  public sun = ['c01n', 'c01d' ];
  public snow = [
  'd01d', 'd01n', 'd02d', 'd02n', 'd03d', 'd03n', 's01d',
  's01n', 's02d', 's02n', 's03d', 's03n', 's04d', 's04n',
  's05d', 's05n', 's06d', 's06n' ];
  public mist = [
  'a01d', 'a01n', 'a02d', 'a02n', 'a03d', 'a03n', 'a04d',
  'a04n', 'a05d', 'a05n', 'a06d', 'a06n' ];
  public cloud = [
  'c02d', 'c02n', 'c02d', 'c02n', 'c03d', 'c03n', 'c04d',
  'c04n', 'u00d', 'u00n' ];
  public sunny = false;
  public rainy = false;
  public stormy = false;
  public snowy = false;
  public misty = false;
  public cloudy = false;


  constructor(private forecast: WeatherForecastService ) {
    this.forecast.selectedOptionChange.subscribe(() => {
      this.getCurrentDay();
    });
  }

  ngOnInit() {
    this.getCurrentDay();
  }

  public getCurrentDay() {
    this.forecast.getCurrent().subscribe(
      dailyForecast => {
        console.log(dailyForecast);
        this.dailyForecast = dailyForecast;
        this.sunny = includes(this.sun, this.dailyForecast[0].weather.icon);
        this.rainy = includes(this.lightRain, this.dailyForecast[0].weather.icon);
        this.stormy = includes(this.stormyWeather, this.dailyForecast[0].weather.icon);
        this.snowy = includes(this.snow, this.dailyForecast[0].weather.icon);
        this.misty = includes(this.mist, this.dailyForecast[0].weather.icon);
        this.cloudy = includes(this.cloud, this.dailyForecast[0].weather.icon);
      }
    );
  }

  // public getSixteenDays() {
  //   this.forecast.getForecast().subscribe(
  //     sixteenForecast => {
  //       this.sixteenForecast = sixteenForecast;
  //       console.log(sixteenForecast);
  //     }
  //   );
  // }

}
