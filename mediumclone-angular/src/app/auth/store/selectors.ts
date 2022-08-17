import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { AuthStateInterface } from "src/app/auth/types/authState.iterface";

export const authFeatureSelector = createFeatureSelector<
  AuthStateInterface
>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)