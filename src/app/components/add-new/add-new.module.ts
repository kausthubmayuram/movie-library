import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewRoutingModule } from './add-new-routing.module';
import { AddNewComponent } from './add-new.component';


@NgModule({
  declarations: [
    AddNewComponent
  ],
  imports: [
    CommonModule,
    AddNewRoutingModule
  ]
})
export class AddNewModule { }
