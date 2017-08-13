import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http'
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { WeatherSearchComponent } from './weather/weather-search.component'
import { TemperaturePipe } from './shared/temperature.pipe'

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    FormsModule 
  ],
  declarations: [ 
    AppComponent,
    WeatherSearchComponent,
    TemperaturePipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
