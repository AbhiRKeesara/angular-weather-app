import { Component, OnInit, Input } from '@angular/core';
import { ApixuService } from '../apixu.service';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() locationName: string;
  constructor() { }

  ngOnInit() {
  }

}
