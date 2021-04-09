import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.API_URL;
  private key = environment.API_KEY;
  constructor(
    private http: HttpClient
  ) { }

  getConditionBykey(key: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/currentconditions/v1/${key}`, {
      params: {
        apikey: this.key,
        details: 'true'
      }
    })
  }

  getLocationByAutoComplete(value: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/locations/v1/cities/autocomplete`, {
      params: {
        apikey: this.key,
        details: 'true',
        q: value
      }
    })
  }

  getLocationBykey(key: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/locations/v1/${key}`, {
      params: {
        apikey: this.key,
        details: 'true'
      }
    })
  }
}
