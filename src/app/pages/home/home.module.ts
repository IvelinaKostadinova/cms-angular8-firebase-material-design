import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRouteModule } from './home.route';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { MaterialModule } from '../../material.module';
import { AfService } from '../../services/af.service';

@NgModule({
  providers: [AfService],
  imports: [CommonModule, HomeRouteModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [HomeComponent, NavbarComponent, LoginComponent, RegisterComponent]
})
export class HomeModule {}
