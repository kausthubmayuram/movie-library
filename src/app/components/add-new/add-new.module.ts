import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewRoutingModule } from './add-new-routing.module';
import { AddNewComponent } from './add-new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddNewComponent
  ],
  imports: [
    CommonModule,
    AddNewRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AddNewModule { }
