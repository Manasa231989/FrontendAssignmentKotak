import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})
export class ApiService {

  constructor(private http:HttpClient) { }

  getSearchList(query:any){
    const url = 'https://hn.algolia.com/api/v1/search';
    const params = new HttpParams().set('query', query)
    return this.http.get(url, {
      params: params
    });
  }

  getPostDetails(id:any){
    const url = `https://hn.algolia.com/api/v1/items/${id}`;
    return this.http.get(url);
  }
}
