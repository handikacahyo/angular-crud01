import { ListComponent } from './list/list.component';
import { CrudComponent } from './crud/crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'crud', component: CrudComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: 'crud', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
