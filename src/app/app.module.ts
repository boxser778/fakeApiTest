import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DataComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
