import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http'
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WeatherSearchComponent } from './weather/weather-search.component';
import { AboutComponent } from './misc/about.component';
import { TemperaturePipe } from './shared/temperature.pipe'

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    WeatherSearchComponent,
    AboutComponent,
    TemperaturePipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
