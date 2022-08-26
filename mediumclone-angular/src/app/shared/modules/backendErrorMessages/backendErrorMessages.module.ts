import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackendErrorsMessagesComponent } from "../components/backendErrorMessages/backendErrorMessages.cmponent";

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorsMessagesComponent],
  exports: [BackendErrorsMessagesComponent]
})
export class BackendErrorsMessagesModule{

}
