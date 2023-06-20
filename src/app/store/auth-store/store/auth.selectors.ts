import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AUTH_FEATURENAME, AuthState} from "./auth.reducer";

const selectAuthState = createFeatureSelector<AuthState>(AUTH_FEATURENAME)

export const selectAuthLoading = createSelector(selectAuthState, (state) => state.loading)
export const selectAuthLoaded = createSelector(selectAuthState, (state) => state.loaded);
export const selectAuthError = createSelector(selectAuthState, (state) => state.error);
export const selectAuthData = createSelector(selectAuthState, (state) => state.authData);
export const selectAccessToken = createSelector(selectAuthData, (authData) => authData && authData.accessToken);
export const selectRefreshToken = createSelector(selectAuthData, (authData) => authData && authData.refreshToken);
export const isAuth = createSelector(selectAccessToken, (accessToken) => !!accessToken);




