import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule} from '@ngrx/router-store';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {TokenInterceptor} from "./store/auth-store/interceptors/token.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
