import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
