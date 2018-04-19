import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HeaderComponent} from './components';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {AuthGuard} from './shared/auth/auth.guard';
import {AuthService} from './shared/auth/auth.service';
import {JwtService} from './shared/services/jwt.service';
import {ApiService} from './shared/services/api.service';
import {HttpClientService} from './shared/services/http-client.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppInterceptorService} from './shared/auth/app-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      {provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi: true},
      AuthGuard,
      AuthService,
      JwtService,
      ApiService,
      HttpClientService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
