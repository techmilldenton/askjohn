// Weather service is responsible for making the http request to the API and returning the weather data.
// It uses the weather variables in the environment to form the API request.
// The functions here are called by the weather component.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // Makes a http call to get current weather in json format
  getCurrentWeather() {
    return this.http.get(`${environment.weatherApiUrl}/weather?id=${environment.weatherLoc}&appid=${environment.weatherApiKey}`)
  }

  // The function in weather component that calls this is not yet implemented
  // Makes a http call to get weather forcast in json format
  getForecast(loc: string) {
    return this.http.get(`${environment.weatherApiUrl}/forecast?id=${environment.weatherLoc}&appid=${environment.weatherApiKey}`)
  }
}
