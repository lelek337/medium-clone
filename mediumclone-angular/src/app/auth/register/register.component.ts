import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { AuthStateInterface } from "src/app/auth/types/authState.iterface";
import { registerAction } from "../store/actions/registerActions";
import { isSubmittingSelector } from "../store/selectors";



@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  initializeForm():void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    this.store.dispatch(registerAction(this.form.value));
  }
}
