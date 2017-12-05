import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-messages',
  templateUrl: './recipe-messages.component.html',
  styleUrls: ['./recipe-messages.component.css']
})
export class RecipeMessagesComponent implements OnInit {

  @Input() messages;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() { }

}
