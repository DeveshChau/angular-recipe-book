import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>()

    private recipe: Recipe[] = [
        new Recipe('Veg Burger',
        'Home made veg burger simply delicious to taste.'
        + ' The burger buns are stuffed with vegetable patties, spiced mayonnaise dressing and cucumber, tomato, onion slices',
        'https://susanstable.com/wp-content/uploads/veggie-burger-easy-4-copy.jpg',
        [
            new Ingredient('onion',10),
            new Ingredient('tomato', 6)
        ]),
        new Recipe('Veg Pizza',
        'This is a tried and tested recipe. You will be able to make great pizzas with a choice of your toppings',
        'https://www.vegrecipesofindia.com/wp-content/uploads/2012/04/veg-pizza-recipe-1.jpg',
        [
            new Ingredient('onion', 10),
            new Ingredient('tomato', 6)
        ])
    ]

    constructor(private slService: ShoppingListService) {}

    setRecipe(recipes: Recipe[]) {
        this.recipe = recipes;
        this.recipeChanged.next(this.recipe.slice());
    }

    getRecipe(){
        return this.recipe.slice();
    }

    getRecipeById(index: number){
        return this.recipe[index]
    }

    addIngresientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }

    addRecipe(recipe: Recipe){
        this.recipe.push(recipe)
        this.recipeChanged.next(this.recipe.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipe[index] = newRecipe
        this.recipeChanged.next(this.recipe.slice())
    }

    deleteRecipe(index: number){
        this.recipe.splice(index, 1)
        this.recipeChanged.next(this.recipe.slice())
    }
}
