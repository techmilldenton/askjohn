import { Component, OnInit } from '@angular/core';
import { EventsDialogComponent } from './events-dialog/events-dialog.component'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  clicks: number = 0;

  constructor(private dialog: MatDialog) { }

  openEventDialog() {
    const dialogConfig = new MatDialogConfig();
    this.clicks = this.clicks + 1;

    // Opens dialog modal and sets the size of the modal.
    this.dialog.open(EventsDialogComponent, {
      width: '85%',
      height: '85%'
    });
  }

  ngOnInit(): void {
  }

}
