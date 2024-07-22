import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  
  {path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  {path: 'add', loadChildren: () => import('./components/add-new/add-new.module').then(m => m.AddNewModule)},
  {path: 'edit', loadChildren: () => import('./components/edit-movie/edit-movie.module').then(m => m.EditMovieModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
