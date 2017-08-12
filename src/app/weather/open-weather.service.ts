import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OpenWeatherService {

	private debugCounter: number = 0; //TODO: Remove

	constructor(private http: Http) { }
	
	requestWeatherFor(cityName: string): Promise<string[]> {
		return Promise.resolve([cityName, `Result ${this.debugCounter++}`, `Result ${this.debugCounter++}`]);
	}
}