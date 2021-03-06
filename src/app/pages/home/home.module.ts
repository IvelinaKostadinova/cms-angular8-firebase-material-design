import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRouteModule } from './home.route';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FaqComponent } from '../faq/faq.component';
import { WorkUsComponent } from '../work-us/work-us.component';
import { MaterialModule } from '../../material.module';
import { AfService } from '../../services/af.service';
import { UserService } from '../../services/fb-base.service';
import { MessageService, WarningSnackbarComponent } from 'src/app/services/message.service';
import { ForgottenPassComponent } from '../forgotten-pass/forgotten-pass.component';

@NgModule({
  providers: [AfService, MessageService, UserService],
  imports: [CommonModule, HomeRouteModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FaqComponent,
    WorkUsComponent,
    ForgottenPassComponent,
    WarningSnackbarComponent
  ]
})
export class HomeModule {}
