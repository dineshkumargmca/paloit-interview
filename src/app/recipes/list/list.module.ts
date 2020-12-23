import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { RecipeService } from '../recipe.service';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
];

@NgModule({
  declarations: [ListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  providers: [RecipeService],
  exports: [RouterModule]
})
export class ListModule { }
