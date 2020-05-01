import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import routes from '../../../../assets/json/routes.json';

@Component({
  selector: 'app-transit-dialog',
  templateUrl: './transit-dialog.component.html',
  styleUrls: ['./transit-dialog.component.css']
})
export class TransitDialogComponent implements OnInit {
routes: any = routes;
viewerBase: string = "https://docs.google.com/viewer?url=";
viewerTail: string = "&embedded=true&rm=minimal";

  constructor(private dialogRef: MatDialogRef<TransitDialogComponent>) { }

  ngOnInit(): void {
  }

}
