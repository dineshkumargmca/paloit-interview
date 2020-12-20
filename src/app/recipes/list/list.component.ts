import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RecipeModel, RecipeResponseModel } from '../model/recipe.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  recipes: RecipeModel[];
  totalRecords: number;
  items: MenuItem[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getData(0);
  }

  paging(event) {
    const pageNo = (event.first / event.rows);
    this.getData(pageNo);
  }

  getData(pageno) {
    this.recipeService.getRecipes(pageno).subscribe((data: RecipeResponseModel) => {
      this.recipes = data.results;
      this.totalRecords = data.totalResults;
    }, error => {

    });
  }

  loadData(event) { }

}
