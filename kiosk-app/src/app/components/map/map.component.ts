import { Component, OnInit } from '@angular/core';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  clicks: number = 0;

  constructor(private dialog: MatDialog) { }

  openMapDialog() {
    const dialogConfig = new MatDialogConfig();
    this.clicks = this.clicks + 1;

    // Opens dialog modal and sets the size of the modal.
    this.dialog.open(MapDialogComponent, {
      width: '85%',
      height: '85%'
    });
  }

  ngOnInit(): void {
  }

}
