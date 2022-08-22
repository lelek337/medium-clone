import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects"
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.iterface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureActions, registerSuccessAction } from "../actions/registerActions";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
        ofType(registerAction),
        switchMap(({request}) => {
          return this.authService.register(request).pipe(
            map((currentUser: CurrentUserInterface) => {
              return registerSuccessAction({currentUser})
            }),

          catchError(() => {
            return of(registerFailureActions())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService
    ){}
}
