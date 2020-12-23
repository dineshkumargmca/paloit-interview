import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'recipelist',
        loadChildren: () => import('./recipes/list/list.module').then(m => m.ListModule)
      },
      {
        path: 'recipedetail/:id',
        loadChildren: () => import('./recipes/detail/detail.module').then(m => m.DetailModule)
      },
      {
        path: '**',
        redirectTo: 'recipelist'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
