import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouteModule } from './app.route';
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
    AppRouteModule,
    HomeModule,
    MaterialModule
  ],
  providers: [
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
