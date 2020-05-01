import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  date: Date;
  greeting: string;

  constructor() {
    setInterval(() => {
      this.date = new Date(),
      this.genGreeting()
    }, 1000)
   }

   genGreeting() {
    this.date = new Date();
    if (this.date.getHours() >= 17 && this.date.getHours() < 24) {
      this.greeting = 'Good evening!'
    }
    else if (this.date.getHours() >= 12 && this.date.getHours() < 17) {
      this.greeting = 'Good afternoon!'
    }
    else {
      this.greeting = 'Good morning!'
    }
    return this.greeting;
  }

  ngOnInit(): void {
  }

}
