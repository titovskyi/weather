import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { Chart } from 'angular-highcharts';
import { map } from 'lodash';

@Component({
  selector: 'app-wind-forecast',
  templateUrl: './wind-forecast.component.html',
  styleUrls: ['./wind-forecast.component.scss']
})
export class WindForecastComponent implements OnInit {
  public windData;
  public windDate;
  public myWindDate;
  public sixteenForecast = [];
  public months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  chart = new Chart({
    title: {
      text: ''
    },
    chart: {
      backgroundColor: 'rgb(245, 245, 245)'
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        showInLegend: false,
        borderWidth: 0
      }
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      visible: false
    },
    series: [{
        type: 'column',
        name: 'Wind',
        color: 'rgb(255, 192, 203)',
        data: [50, 100, 150, 23, 58, 94, 154]
    }]
  });
  // add point to chart serie
  // add() {
  //   this.chart.addPoint(Math.floor(Math.random() * 10));
  // }
  constructor(private forecast: WeatherForecastService) {
    this.forecast.selectedOptionChange.subscribe(() => {
      this.getSixteenDays();
    });
   }

  ngOnInit() {
    this.getSixteenDays();
  }

  public getSixteenDays() {
    this.forecast.getForecast().subscribe(
      sixteenForecast => {
        this.sixteenForecast = sixteenForecast[0];
        this.windData = map(sixteenForecast, 'wind_spd');
        this.windDate = map(sixteenForecast, 'datetime');
        this.myWindDate = this.windDate.map((date) => {
          const dateString = new Date(date);
          if (!isNaN(dateString.getTime())) {
            return dateString.getDate() + ' ' + this.months[dateString.getMonth()];
          }
        });
        console.log(sixteenForecast);
        console.log(this.windData);
        console.log(this.windDate);
        console.log(this.myWindDate);
        this.chart.ref.series[0].setData(this.windData, true);
        this.chart.ref.xAxis[0].setCategories(this.myWindDate, true);
      }
    );
  }
}
