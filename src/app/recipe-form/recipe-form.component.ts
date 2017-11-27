import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  model: Recipe;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.model = new Recipe();
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    this.recipeService.addRecipe(this.model);
    this.router.navigateByUrl('/recipes');
  }

}
