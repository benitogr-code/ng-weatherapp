import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { CityModel } from './city.model'

@Injectable()
export class OpenWeatherService {

	private apiKey: string = "083577d01ebc3def8c238aba7f3e0e8e";

	constructor(private http: Http) { 
	}
	
	requestWeatherFor(cityName: string): Promise<Array<CityModel>> {
		
		let url: string = "https://api.openweathermap.org/data/2.5/find";
		let params: URLSearchParams = new URLSearchParams();
		params.set('q', cityName);
		params.set('type', 'like');
		params.set('units', 'metric');
		params.set('appid', this.apiKey);

		return this.http.get(url, { search: params })
			.toPromise()
			.then(responseMsg => this.formatResponse(responseMsg.json()))
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
  	console.error('An error occurred', error);
  	return Promise.reject(error.message || error);
	}

	private formatResponse(responseData: any): Array<CityModel> {
		let cities: Array<CityModel> = [];
		for (let item of responseData.list) {
			let city: CityModel = {
				id: item.id,
				name: item.name,
				countryCode: item.sys.country,
				latitude: item.coord.lat,
				longitude: item.coord.lon,
				weatherDescription: item.weather[0].description,
				weatherIcon: item.weather[0].icon,
				weatherTemperature: item.main.temp,
				weatherPressure: item.main.pressure
			};
			cities.push(city);
		}

		return cities;
	}
}