import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFilmsComponent } from './pages/search-films/searchfilms.component';

const routes: Routes = [
  {
    path: '',
    component: SearchFilmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchFilmsRoutingModule {
}
