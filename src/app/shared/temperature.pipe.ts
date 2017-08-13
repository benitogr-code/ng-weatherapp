import { Pipe, PipeTransform } from '@angular/core';

/*
 * Converts input temperature (in Kelvin) to ºC or ºF
 * Usage:
 *   value | temperature:unit
 * Example:
 *   {{ 303.15 | temperature: cel }}
 *   formats to: 30 ºC
*/

@Pipe({
	name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

	transform(value: number, unit: string): string {
		//console.log("Temperature Pipe: " + unit);
		if (unit && (unit === "cel")) {
			let newValue = value - 273.15;
			return `${newValue.toFixed(2)} ºC`;
		}
		else if (unit && (unit === "fah")) {
			const factor = 9.0/5.0;
			let newValue =  (value * factor) - 459.67;
			return `${value.toFixed(2)} ºF`;
		}
		else {
			return `${value} ºK`;
		}
	}
}