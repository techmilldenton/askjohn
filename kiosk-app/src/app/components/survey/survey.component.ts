import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SurveyDialogComponent } from './survey-dialog/survey-dialog.component';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  clicks: number = 0;

  constructor(private dialog: MatDialog) { }

  openSurveyDialog() {
    const dialogConfig = new MatDialogConfig();
    this.clicks = this.clicks + 1;

    // Opens dialog modal and sets the size of the modal.
    this.dialog.open(SurveyDialogComponent, {
      width: '85%',
      height: '85%',
    });
  }

  ngOnInit(): void {
  }

}
