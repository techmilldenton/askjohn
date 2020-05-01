import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TransitDialogComponent } from './transit-dialog/transit-dialog.component';

@Component({
  selector: 'app-transit',
  templateUrl: './transit.component.html',
  styleUrls: ['./transit.component.css']
})
export class TransitComponent implements OnInit {
  clicks: number = 0;

  constructor(private dialog: MatDialog) { }

  openTransitDialog() {
    const dialogConfig = new MatDialogConfig();
    this.clicks = this.clicks + 1;

    // Opens dialog modal and sets the size of the modal.
    this.dialog.open(TransitDialogComponent, {
      width: '85%',
      height: '85%'
    });
  }

  ngOnInit(): void {
  }

}
