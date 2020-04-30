import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import {IndexStartComponent} from './components/index/index-start/index-start.component';
import {IndexLoginComponent} from './components/index/index-login/index-login.component';
import {IndexRegisterComponent} from './components/index/index-register/index-register.component';
import {IndexForgotPasswordComponent} from './components/index/index-forgot-password/index-forgot-password.component';

import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guard/auth.guard';
import {FeedComponent} from './components/feed/feed.component';


const routes: Routes = [
  { path: '', component: IndexComponent,
    children: [
      { path: '', component: IndexStartComponent },
      { path: 'login', component: IndexLoginComponent },
      { path: 'register', component: IndexRegisterComponent },
      { path: 'forgot-password', component: IndexForgotPasswordComponent },
    ]
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
        { path: '', component: FeedComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
