import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  model: Recipe;

  constructor() { }

  ngOnInit() {
    this.model = new Recipe();
  }

  submit(form) {
    if (!form.valid) {
      return;
    }

  }

}
