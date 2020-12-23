import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RecipeModel, RecipeResponseModel } from '../model/recipe.model';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  recipes: RecipeModel[];
  totalRecords: number;
  items: MenuItem[];
  loading = false;
  ingredients = [];
  selectedIngredients: any;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.getData(0);
    this.getIngredients('app');
  }

  paging(event) {
    const pageNo = (event.first / event.rows);
    this.getData(pageNo);
  }

  getData(pageno) {
    this.loading = true;
    this.recipeService.getRecipes(pageno).subscribe((data: RecipeResponseModel) => {
      this.recipes = data.results;
      this.totalRecords = data.totalResults;
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }


  getIngredients(query) {
    this.recipeService.getIngredients(query).subscribe((data: any) => {
      if (data) {
        data.forEach(element => {
          element.code = element.name;
        });
      }
      this.ingredients = data;
    }, error => {
    });
  }

  loadData(event) { }

}
