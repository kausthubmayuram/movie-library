import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorInterceptor } from './interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},{ provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
