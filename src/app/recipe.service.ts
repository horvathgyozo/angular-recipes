import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const RECIPES: Recipe[] = [
  { id: 1, title: 'recipe1', ingredients: 'ingr1', description: 'desc1', imgUrl: 'http://www.mnhsz.com/storage/upload/2016/gulyas1.jpg' },
  { id: 2, title: 'recipe2', ingredients: 'ingr2', description: 'desc2', imgUrl: 'http://www.nosalty.hu/files/imagecache/recept/recept_kepek/dsc_0421.jpg' },
  { id: 3, title: 'recipe3', ingredients: 'ingr3', description: 'desc3', imgUrl: 'http://2.bp.blogspot.com/_5O-jypyl64M/TFJhfFqFYFI/AAAAAAAAD3o/SnHbicHMvM8/s1600/csusza.jpg' },
  { id: 4, title: 'recipe4', ingredients: 'ingr4', description: 'desc4', imgUrl: 'http://www.nosalty.hu/files/imagecache/recept/recept_kepek/bajai-halaszle.jpg' },
];

interface FeathersResponse<T> {
  total: number,
  limit: number,
  skip: number,
  data: T[]
};

@Injectable()
export class RecipeService {

  private recipeUrl = 'http://localhost:3030/recipes';

  constructor(
    private http: HttpClient
  ) { }

  getRecipes(): Promise<Recipe[]> {
    return this.http.get<FeathersResponse<Recipe>>(this.recipeUrl)
      .map(response => response.data).toPromise();
  }

  getRecipe(id: number): Promise<Recipe> {
    return this.http.get<Recipe>(`${this.recipeUrl}/${id}`).toPromise();
  }

  addRecipe(data) {
    const newRecipe = Object.assign(data, {
      id: RECIPES.length + 1
    });
    RECIPES.push(newRecipe);
  }

  updateRecipe(data): Promise<Recipe> {
    return this.http.put<Recipe>(`${this.recipeUrl}/${data.id}`, data, httpOptions).toPromise();
  }

}
