import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiWeatherUrl = environment.API_WEATHER_URL;
  private weatherKey = environment.API_WEATHER_KEY;
  private forecastUrl = environment.API_FORECAST_URL;
  private forecastKey = environment.API_FORECAST_KEY;
  private forecastRapidHost = environment.API_FORECAST_RAPIDAPI_HOST;

  constructor(
    private http: HttpClient
  ) { }

  getConditionBykey(key: string): Observable<any> {
    return this.http.get(`${this.apiWeatherUrl}/currentconditions/v1/${key}`, {
      params: {
        apikey: this.weatherKey,
        details: 'true'
      }
    });
  }

  getLocationByAutoComplete(value: string): Observable<any> {
    return this.http.get(`${this.apiWeatherUrl}/locations/v1/cities/autocomplete`, {
      params: {
        apikey: this.weatherKey,
        details: 'true',
        q: value
      }
    });
  }

  getLocationBykey(key: string): Observable<any> {
    return this.http.get(`${this.apiWeatherUrl}/locations/v1/${key}`, {
      params: {
        apikey: this.weatherKey,
        details: 'true'
      }
    });
  }
}
