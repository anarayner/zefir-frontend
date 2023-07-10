import {createReducer, on} from "@ngrx/store";
import {login, loginFailed, loginSuccess, logoutSuccess} from "./auth.actions";

export const AUTH_FEATURENAME = 'auth'
export interface AuthData {
  accessToken: string;
  refreshToken: string;
  id: string;
}

export interface AuthState {
  loading: boolean;
  loaded: boolean;
  error: string;
  authData?: AuthData | null;
}

const initialState: AuthState = {
  loading: false,
  loaded: false,
  error: ''
}

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({...state, loading: true}) ),
  on(loginSuccess, (state, {authData}) => ({...state, loading: false, loaded: true, authData}) ),
  on(loginFailed, (state, {error}) => ({...state, loading: false, error}) ),
  on(logoutSuccess, () => ({...initialState, authData: null}) ),
)
