import {createAction, props} from "@ngrx/store";
import {AuthData} from "./auth.reducer";

export const login = createAction('[Auth] login',
  props<{email: string, password: string}>()
);

export const loginSuccess = createAction('[Auth] login success',
  props<{ authData: AuthData }>()
);

export const loginFailed = createAction('[Auth] login failed',
  props<{error: string}>()
);

export const initAuth = createAction(
  '[Auth] Init Auth');

export const logoutSuccess = createAction(
  '[Auth] logout success');
