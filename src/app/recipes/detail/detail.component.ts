import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  recipeDetail: any;
  loading = true;
  id: number;
  private sub: any;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getRecipedetail(this.id);
    });

  }

  getRecipedetail(recipeId) {
    this.loading = true;
    this.recipeService.getRecipedetail(recipeId).subscribe((data: any) => {
      this.recipeDetail = data;
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
