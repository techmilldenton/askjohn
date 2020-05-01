import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsService } from '../../../services/news.service'

@Component({
  selector: 'app-news-dialog',
  templateUrl: './news-dialog.component.html',
  styleUrls: ['./news-dialog.component.css']
})
export class NewsDialogComponent implements OnInit {

  //holds returned news data
  newsList: any = <any>{};

  constructor(
    private dialogRef: MatDialogRef<NewsDialogComponent>,
    private newsService: NewsService
    ) { }

  ngOnInit(): void {
    this.searchNews();
  }

  searchNews(){
    //calling news service
    this.newsService.getNews()
    .subscribe(res => {
      this.newsList = res;
    }, () => {})
  }

}
