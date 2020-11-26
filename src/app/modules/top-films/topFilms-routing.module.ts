import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopFilmsComponent } from './pages/top-films/top-films.component';

const routes: Routes = [
  {
    path: '',
    component: TopFilmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopFilmsRoutingModule { }
