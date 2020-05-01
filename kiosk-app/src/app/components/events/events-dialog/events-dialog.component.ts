import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { EventsService } from '../../../services/events.service'
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-events-dialog',
  templateUrl: './events-dialog.component.html',
  styleUrls: ['./events-dialog.component.css']
})
export class EventsDialogComponent implements OnInit {

  msg: string;

  //eventsList$: Observable<JSON>;
  eventsList: any = <any>{};

  constructor(
    private dialogRef: MatDialogRef<EventsDialogComponent>,
    private eventsService: EventsService
    ) { }

  ngOnInit(): void {
    this.searchEvents();
  }

  searchEvents() {
    //calling events service
    this.eventsService.getEvents()
    .subscribe(res => {
      this.eventsList = res;
    }, () => {})
  }
}

// , err => {
//   if (err.error && err.error.message) {
//     alert(err.error.message);
//     this.msg = err.error.message;
//     return;
//   }
//   alert('Failed to get events.');
// }