import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FaqComponent } from '../faq/faq.component';
import { WorkUsComponent } from '../work-us/work-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'work-us',
        component: WorkUsComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

export const HomeRouteModule = RouterModule.forChild(routes);
