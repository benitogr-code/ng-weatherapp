import { Component } from '@angular/core';

import { OpenWeatherService } from './open-weather.service';
import { CityWeather } from './city-weather';

enum ESearchState {
	Waiting,
	Done
}

class SearchResult {
	public cities: Array<CityWeather> = [];
	public state: ESearchState = ESearchState.Done; 
}

@Component({
	selector: 'weather-search',
	templateUrl: './weather-search.component.html',
	styleUrls: [ './weather-search.component.css' ],
	providers: [ OpenWeatherService ]
})
export class WeatherSearchComponent {

	public searchInput: string;
	public searchResult: SearchResult = new SearchResult();
	
	constructor(private openWeatherService: OpenWeatherService) {}

	requestWeatherFor(cityName: string): void {
		this.searchResult.state = ESearchState.Waiting;
		
		this.openWeatherService.requestWeatherFor(cityName)
			.then(data => { 
				this.searchResult.cities = data;  
				this.searchResult.state = ESearchState.Done;
			})
			.catch(error => { 
				this.searchResult.cities = [];
				this.searchResult.state = ESearchState.Done;
				console.log(error);
			});
	}

	canSubmitRequest(formIsValid: boolean): boolean {
		return formIsValid && (this.searchResult.state === ESearchState.Done);
	}
}