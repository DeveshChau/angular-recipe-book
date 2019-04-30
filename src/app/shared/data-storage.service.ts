import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../components/recipes/recipe.service';
import { Recipe } from '../models/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../components/auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://angular-recipe-book-39895.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipe());
    }

    getRecipes() {
        const token = this.authService.getToken();

        this.http.get('https://angular-recipe-book-39895.firebaseio.com/recipes.json?auth=' + token)
        .pipe(map(
            (response:Response) => {
                const recipes: Recipe[] = response.json();
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )).subscribe((recipes: Recipe[]) => {
            this.recipeService.setRecipe(recipes);
        });
    }
}
