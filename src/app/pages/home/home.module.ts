import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRouteModule } from './home.route';
import { AppNavbarComponent } from '../../components/app-navbar/app-navbar.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { MaterialModule } from '../../material.module';
import { AfService } from '../../services/af.service';

@NgModule({
  providers: [
    AfService
  ],
  imports: [
    CommonModule,
    HomeRouteModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    AppNavbarComponent,
    LoginComponent
  ]
})
export class HomeModule { }
