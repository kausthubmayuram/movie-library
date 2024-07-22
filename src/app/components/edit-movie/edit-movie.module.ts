import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditMovieRoutingModule } from './edit-movie-routing.module';
import { EditMovieComponent } from './edit-movie.component';


@NgModule({
  declarations: [
    EditMovieComponent
  ],
  imports: [
    CommonModule,
    EditMovieRoutingModule
  ]
})
export class EditMovieModule { }
