import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgifyApiService {

  private apiUrl = 'https://api.agify.io/';

  constructor(private http: HttpClient) { }

  public getNameData(name: string): any {
    const options = {
      params: new HttpParams().set('name', name)
    };

    return this.http.get(this.apiUrl, options);
  }
}
