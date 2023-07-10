import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store, StoreModule} from "@ngrx/store";
import {AUTH_FEATURENAME, authReducer} from "./store/auth.reducer";
import {AuthService} from "./services/auth.service";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/auth.effects";
import {initAuth} from "./store/auth.actions";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURENAME, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthService,
  ]
})
export class AuthStoreModule {
  constructor(private store: Store) {
    this.store.dispatch(initAuth())
  }
}
