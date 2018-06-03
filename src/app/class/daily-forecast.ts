export class DailyForecast {
  public date: string;
  public city: string;
  public temperature: number;
  public description: string;
  public pressure: number;
  public humidity: number;
  public wind: number;
  public clouds: number;

  constructor (date, city, temperature, description, pressure, humidity, wind, clouds) {
    this.date = date;
    this.city = city;
    this.temperature = temperature;
    this.description = description;
    this.pressure = pressure;
    this.humidity = humidity;
    this.wind = wind;
    this.clouds = clouds;
  }
}
