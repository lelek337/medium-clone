import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss']
})
export class BackendErrorsMessagesComponent implements OnInit{
  @Input() backendErrors: BackendErrorsInterface | any;

  errorMessages: string[] | undefined;

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors)
    .map((name: string) => {
      const messages = this.backendErrors[name].join(' ');

      return `${name} ${messages}`;
    })
  }
}
