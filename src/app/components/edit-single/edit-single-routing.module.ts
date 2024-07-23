import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSingleComponent } from './edit-single.component';

const routes: Routes = [
  {path:'', component:EditSingleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSingleRoutingModule { }
