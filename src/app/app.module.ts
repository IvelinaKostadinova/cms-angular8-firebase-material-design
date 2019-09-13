import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';

import { MaterialModule } from './material.module';
import { WINDOW_PROVIDERS } from './services/window.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MaterialModule
  ],
  providers: [
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
