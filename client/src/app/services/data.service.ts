import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private stocksData: any = [];

  constructor(private httpClient: HttpClient) { }
  getData(): Observable<any> {
    const header = new HttpHeaders().set("Authorization", "")
    return this.httpClient.get
      ("https://localhost:3000/stocks", {
        headers: header
      })
  }

}
