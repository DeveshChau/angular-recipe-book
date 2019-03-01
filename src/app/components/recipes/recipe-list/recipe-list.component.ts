import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  
  recipes: Recipe[]
  subscription: Subscription

  constructor(private recipeService: RecipeService,
    private router: Router,
    private routes: ActivatedRoute) { }

  ngOnInit() {
    this.subscription=this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) =>{
        this.recipes = recipes
      }
    )
    this.recipes = this.recipeService.getRecipe()
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.routes})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
