import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  model: Recipe;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.model = id === null
      ? new Recipe()
      : this.recipeService.getRecipe(+id);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    if (this.model.id > 0) {
      this.recipeService.updateRecipe(this.model);
    } else {
      this.recipeService.addRecipe(this.model);
    }
    this.router.navigateByUrl('/recipes');
  }

}
