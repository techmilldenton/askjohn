import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { AirqualityService } from '../../services/airquality.service'

@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.component.html',
  styleUrls: ['./airquality.component.css']
})
export class AirqualityComponent implements OnInit {
  // Refresh interval when another check for air quality updates happens. Interval is in ms. 6000000 is 1 hour (default). Please
  // be mindful of the API provider's service guidelines when changing this value.
  refresh = interval(6000000);
  
  currentAqi: any = <any>{};
  subscription: Subscription;

  constructor(private airQualityService: AirqualityService) {
    this.searchAqi();
    this.subscription = this.refresh.subscribe(val => this.searchAqi());
  }

  ngOnInit(): void {
  }

  searchAqi() {
    this.currentAqi = {};
    this.airQualityService.getCurrentAqi()
      .subscribe(res => {
        this.currentAqi = res;
      }, () => {})
  }

  resultFound() {
    return Object.keys(this.currentAqi).length > 0;
  }
}
