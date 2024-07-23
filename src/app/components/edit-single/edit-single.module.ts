import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSingleRoutingModule } from './edit-single-routing.module';
import { EditSingleComponent } from './edit-single.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditSingleComponent
  ],
  imports: [
    CommonModule,
    EditSingleRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditSingleModule { }
