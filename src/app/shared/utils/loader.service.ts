import { Injectable } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private spinner: SpinnerVisibilityService) { }

  showLoader() {
    this.spinner.show();
  }

  hideLoader() {
    this.spinner.hide();
  }
}
