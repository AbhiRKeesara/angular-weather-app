import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=2154606ed5dfbe59df9c32e5df16450a&query=' + location
    );
  }
}
