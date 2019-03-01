import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../components/recipes/recipe.service";
import { Recipe } from "../models/recipe.model";
import { map } from 'rxjs/operators'

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService){}

    storeRecipes() {
        return this.http.put('https://angular-recipe-book-1b0ca.firebaseio.com/recipes.json', this.recipeService.getRecipe())
    }

    getRecipes() {
        this.http.get("https://angular-recipe-book-1b0ca.firebaseio.com/recipes.json")
        .pipe(map(
            (response: Response) => {
                const recipes: Recipe[] = response.json()
                for(let recipe of recipes) {
                    if(!recipe['ingredients']){
                        recipe['ingredients'] = []
                    }
                } 
                return recipes
            }
        )).subscribe((recipes: Recipe[]) => {
            this.recipeService.setRecipe(recipes)
        })
    }
}