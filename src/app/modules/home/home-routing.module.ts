import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'trask',
    loadChildren: () => import('@modules/task/task.module').then(m => m.TaskModule)
  },
  {
    path:'**',
    redirectTo: '/trask'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
