import { Component } from '@angular/core';

import { ErrorService } from "src/app/services/error.service";

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html'
})
export class ErrorHandlerComponent {
  constructor(public errorService: ErrorService) {
  }
}
