import { Component, OnInit } from '@angular/core';
import { ApixuService } from '../apixu.service';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  public weatherDatas: any;
  constructor(private apixuService: ApixuService) { }

  ngOnInit() {
  }

  conSolelogging(weatherData) {
    this.sendToAPIXU(weatherData);
  }

  sendToAPIXU(formValues) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => this.weatherDatas = data);
    let dest = this.weatherDatas;

    console.log(dest.);
  }

}
