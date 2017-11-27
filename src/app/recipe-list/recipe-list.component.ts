import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  filterText: string = "";
  filteredRecipes: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) { }

  async ngOnInit() {
    this.recipes = await this.recipeService.getRecipes();
    this.filterRecipes();
  }

  filterRecipes() {
    this.filteredRecipes = this.filterText == '' ?  [] : this.recipes.filter(recipe => recipe.title.includes(this.filterText));
  }

  onFilterChange(value) {
    this.filterText = value;
    this.filterRecipes();
  }
}
