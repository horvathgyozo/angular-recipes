import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    { id: 1, title: 'recipe1', ingredients: 'ingr1', description: 'desc1', imgUrl: 'http://www.mnhsz.com/storage/upload/2016/gulyas1.jpg' },
    { id: 2, title: 'recipe2', ingredients: 'ingr2', description: 'desc2', imgUrl: 'http://www.nosalty.hu/files/imagecache/recept/recept_kepek/dsc_0421.jpg' },
    { id: 3, title: 'recipe3', ingredients: 'ingr3', description: 'desc3', imgUrl: 'http://2.bp.blogspot.com/_5O-jypyl64M/TFJhfFqFYFI/AAAAAAAAD3o/SnHbicHMvM8/s1600/csusza.jpg' },
    { id: 4, title: 'recipe4', ingredients: 'ingr4', description: 'desc4', imgUrl: 'http://www.nosalty.hu/files/imagecache/recept/recept_kepek/bajai-halaszle.jpg' },
  ];
  filterText: string = "";
  filteredRecipes: Recipe[];

  constructor() { }

  ngOnInit() {
    this.filterRecipes();
  }

  filterRecipes() {
    this.filteredRecipes = this.recipes.filter(recipe => recipe.title.includes(this.filterText));
  }

  onFilterChange(value) {
    this.filterText = value;
    this.filterRecipes();
  }
}
