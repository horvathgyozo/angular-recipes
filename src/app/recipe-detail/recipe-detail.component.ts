import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { ParamMap } from '@angular/router';
import { Observable } from "rxjs";
import 'rxjs/add/operator/switchMap';
import { Message } from '../message';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  messages: Message[];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipe = await this.recipeService.getRecipe(id);
    this.messages = await this.recipeService.getMessages(id);

    // this.route.paramMap
    //   .switchMap((params: ParamMap) => {
    //     this.recipe = this.recipeService.getRecipe(+params.get('id'));
    //     return Observable.of();
    //   })
    //   .subscribe();
  }

}
