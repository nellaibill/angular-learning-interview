import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    alert('An Unexpected error Occured global');
    console.log(error);
  }
}
