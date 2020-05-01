import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-survey-dialog',
  templateUrl: './survey-dialog.component.html',
  styleUrls: ['./survey-dialog.component.css']
})
export class SurveyDialogComponent implements OnInit {
  surveyUrl: string = `${environment.surveyUrl}`;
  trustedSurvey = this.sanitizer.bypassSecurityTrustResourceUrl(this.surveyUrl);


  constructor(
    private dialogRef: MatDialogRef<SurveyDialogComponent>,
    private sanitizer: DomSanitizer){ }

  ngOnInit(): void {
  }

}
