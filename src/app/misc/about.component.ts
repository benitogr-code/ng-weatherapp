import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
	selector: 'weather-about',
	templateUrl: './about.component.html',
	styleUrls: [ './about.component.css' ]
})

export class AboutComponent {

	constructor(private router: Router) {}

	goBackHome(): void {
		this.router.navigate(['/home']);
	}
}