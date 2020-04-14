import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

// Services
import {ApiService} from 'src/app/services/api.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guard/auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';

// Components
import {FooterComponent} from './components/shared/footer/footer.component';
import {IndexComponent} from './components/index/index.component';
import {HomeComponent} from './components/home/home.component';
import {IndexStartComponent} from './components/index/index-start/index-start.component';
import {IndexLoginComponent} from './components/index/index-login/index-login.component';
import {IndexRegisterComponent} from './components/index/index-register/index-register.component';
import {IndexForgotPasswordComponent} from './components/index/index-forgot-password/index-forgot-password.component';
import {HomeService} from './services/home.service';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        IndexComponent,
        HomeComponent,
        IndexStartComponent,
        IndexLoginComponent,
        IndexRegisterComponent,
        IndexForgotPasswordComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
        FormsModule
    ],
    providers: [ApiService, AuthService, AuthGuard, HomeService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
