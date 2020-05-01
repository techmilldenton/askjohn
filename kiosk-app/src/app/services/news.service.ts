import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http: HttpClient) { }

  getNews() {
    return this.http.get(`${environment.newsApiUrl}&apikey=${environment.newsApiKey}`)
  }

}
