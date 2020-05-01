import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  // Refersh interval when another check for weather updates happens. Interval is in ms. 6000000 is 1 hour. Please be mindful
  // of the API provider's service guidelines when changing this value.
  refresh = interval(6000000);

  currentWeather: any = <any>{};
  subscription: Subscription;

  constructor(private weatherService: WeatherService) {
      this.searchWeather();
      this.subscription = this.refresh.subscribe(val => this.searchWeather());
  }

  ngOnInit(): void {
  }

  searchWeather() {
    this.currentWeather = {};
    this.weatherService.getCurrentWeather()
      .subscribe(res => {
        this.currentWeather = res;
      }, () => {})
  }

  resultFound () {
    return Object.keys(this.currentWeather).length > 0;
  }

  convertK2F (tempK: number) {
    let tempF = tempK * 9/5 -459.67;
    return tempF;
  }

  covnertK2C (tempK: number) {
    let tempC = tempK - 273.15;
    return tempC;
  }
}
