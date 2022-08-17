import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "src/app/shared/types/authState,iterface";
import { registerAction } from "./actions";

const initialState: AuthStateInterface = {
  isSubmitting: false
}

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true
  })))

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
