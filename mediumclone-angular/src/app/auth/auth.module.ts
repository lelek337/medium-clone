import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BackendErrorsMessagesModule } from "../shared/modules/backendErrorMessages/backendErrorMessages.module";
import { PersistanceService } from "../shared/services/persistance.service";

import { RegisterComponent } from "./register/register.component";
import { AuthService } from "./services/auth.service";
import { RegisterEffect } from "./store/efects/register.efect";
import { reducers } from "./store/reducers";

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorsMessagesModule
  ],
  declarations: [
    RegisterComponent
  ],
  exports: [],
  providers: [AuthService, PersistanceService]
})
export class AuthModule {}
