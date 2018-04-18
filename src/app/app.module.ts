import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HeaderComponent} from './components';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {AuthGuard} from './shared/auth/auth.guard';
import {AuthService} from './shared/auth/auth.service';
import {JwtService} from './shared/services/jwt.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      AuthGuard,
      AuthService,
      JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
