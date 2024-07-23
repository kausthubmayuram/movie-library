import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertsService } from './shared/utils/alerts.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  baseUrl = environment.apiUrl;
  constructor( private alerService:AlertsService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      url: this.baseUrl + request.url,
      setHeaders: {
        appId: 'Kausthub'
      }
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpRequest) {
          console.log('Request', event);
        }
        return event;
      }
    ),
    catchError((error) => {
      let err = error;
      switch (error.status) {
        case 400:
          console.log('Bad Request');
          this.alerService.showError('Bad Request','Error');
          break;
        case 401:
          console.log('Unauthorized');
          this.alerService.showError('Unauthorized','Error');
          break;
        case 403:
          console.log('Forbidden');
          this.alerService.showError('Forbidden','Error');
          break;
        case 404:
          console.log('Not Found');
          this.alerService.showError('Not Found','Error');
          break;
        case 500:
          console.log('Internal Server Error');
          this.alerService.showError('Internal Server Error','Error');
          break;
        default:
          console.log('Unknown Error');
          this.alerService.showError('Unknown Error','Error');
          break;
      }
      throw throwError(error);
    }));
  }
}
