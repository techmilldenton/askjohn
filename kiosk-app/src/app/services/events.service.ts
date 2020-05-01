import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(public http: HttpClient) { }

  getEvents() {
    return this.http.get(`${environment.eventsApiUrl}?cors_filter=1&app_key=${environment.eventsApiKey}&location=${environment.eventsLoc}`)  
  }

}