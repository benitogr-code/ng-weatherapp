import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { CityWeather } from './city-weather'

@Injectable()
export class OpenWeatherService {

	private apiKey: string = "083577d01ebc3def8c238aba7f3e0e8e";

	constructor(private http: Http) { 
	}
	
	requestWeatherFor(cityName: string): Promise<Array<CityWeather>> {
		
		let url: string = "https://api.openweathermap.org/data/2.5/find";
		let params: URLSearchParams = new URLSearchParams();
		params.set('q', cityName);
		params.set('type', 'like');
		params.set('units', 'metric');
		params.set('appid', this.apiKey);

		return this.http.get(url, { search: params })
			.toPromise()
			.then(responseMsg => this.formatResponse(responseMsg.json()))
			.catch(error => { this.handleError(error); return []});
	}

	private handleError(error: any): void {
  	console.error('An error occurred', error);
	}

	private formatResponse(responseData: any): Array<CityWeather> {
		let cities: Array<CityWeather> = [];
		for (let item of responseData.list) {

			//Filter duplicates
			if (cities.find(rhs => (item.name === rhs.name) && (item.sys.country === rhs.countryCode)))
				continue;

			//Add new city weather entry
			let city: CityWeather = {
				id: item.id,
				name: item.name,
				countryCode: item.sys.country,
				latitude: item.coord.lat,
				longitude: item.coord.lon,
				weatherDescription: item.weather[0].description,
				weatherIcon: item.weather[0].icon,
				weatherTemperature: item.main.temp,
				weatherPressure: item.main.pressure,
				
				getFlagIconUrl(): string {
					return `http://openweathermap.org/images/flags/${this.countryCode.toLowerCase()}.png`;
				},

				getWeatherIconUrl(): string {
					return `http://openweathermap.org/img/w/${this.weatherIcon.toLowerCase()}.png`;
				},

				getCityUrl(): string {
					return `https://openweathermap.org/city/${this.id}`;
				},

				getMapUrl(): string {
					return `https://openweathermap.org/weathermap?zoom=12&lat=${this.latitude}&lon=${this.longitude}`;
				}
			};
			cities.push(city);
		}

		return cities;
	}
}