export interface CityWeather {
	id: number;
	name: string;
	countryCode: string;
	latitude: number;
	longitude: number;
	weatherDescription: string;
	weatherIcon: string;
	weatherTemperature: number;
	weatherPressure: number;

	getFlagIconUrl(): string;
	getWeatherIconUrl(): string;
	getCityUrl(): string;
	getMapUrl(): string;
}