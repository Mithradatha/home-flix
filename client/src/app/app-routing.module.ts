import { FlixComponent } from './flix/flix.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'flixes', component: FlixComponent },
  { path: '', redirectTo: '/flixes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
