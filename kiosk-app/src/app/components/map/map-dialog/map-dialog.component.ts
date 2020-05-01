import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {

  mapUrl: string = `${environment.mapUrl}`;
  trustedMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);

  constructor(
    private dialogRef: MatDialogRef<MapDialogComponent>,
    private sanitizer: DomSanitizer){ }

  ngOnInit(): void {
  }

}
