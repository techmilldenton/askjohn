// air quality service is responsible for making the http request to the API and returning the air quality data.
// It uses the air quality variables in the environment file to form the API request.
// The functions here are called by the air quality component.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirqualityService {

  constructor(private http: HttpClient) { }

  getCurrentAqi() {
    return this.http.get(`${environment.aqiApiUrl}city=${environment.aqiCity}&state=${environment.aqiState}&country=${environment.aqiCountry}&key=${environment.aqiApiKey}`)
  }
}