import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeResponseModel } from './model/recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes(pageNo): Observable<RecipeResponseModel> {
    let params = new HttpParams();
    params = params.append('apiKey', '8eff7f4383b3494c968e2cf646a353d0');
    params = params.append('offset', pageNo);
    return this.http.get<RecipeResponseModel>('https://api.spoonacular.com/recipes/complexSearch', { params: params });
  }
}
