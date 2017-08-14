import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { WeatherSearchComponent } from './weather/weather-search.component';
import { AboutComponent } from './misc/about.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: WeatherSearchComponent },
  { path: 'about',     component: AboutComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}