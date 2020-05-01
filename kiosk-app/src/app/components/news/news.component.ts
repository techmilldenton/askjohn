import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewsDialogComponent } from '../news/news-dialog/news-dialog.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  clicks: number = 0;

  constructor(private dialog: MatDialog) { }

  openNewsDialog() {
    const dialogConfig = new MatDialogConfig();
    this.clicks = this.clicks + 1;

    // Opens dialog modal and sets the size of the modal.
    this.dialog.open(NewsDialogComponent, {
      width: '85%',
      height: '85%'
    });
  }

  ngOnInit(): void {
  }

}
