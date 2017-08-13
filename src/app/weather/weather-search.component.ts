import { Component } from '@angular/core';

import { OpenWeatherService } from './open-weather.service';
import { CityWeather } from './city-weather';

@Component({
	selector: 'weather-search',
	templateUrl: './weather-search.component.html',
	providers: [ OpenWeatherService ]
})

export class WeatherSearchComponent {

	public searchResult: Array<CityWeather> = [];
	
	constructor(private openWeatherService: OpenWeatherService) {}

	requestWeatherFor(cityName: string): void {
		this.openWeatherService.requestWeatherFor(cityName)
			.then(results => this.searchResult = results )
			.catch(error => console.log(error));
	}
}