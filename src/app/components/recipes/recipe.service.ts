import { EventEmitter } from "@angular/core";
import { Recipe } from "src/app/models/recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>()
    
    recipe: Recipe[] = [
        new Recipe("Veg Burger","Home made veg burger simply delicious to taste. The burger buns are stuffed with vegetable patties, spiced mayonnaise dressing and cucumber, tomato, onion slices","https://susanstable.com/wp-content/uploads/veggie-burger-easy-4-copy.jpg"),
        new Recipe("Veg Pizza","This is a tried and tested recipe. You will be able to make great pizzas with a choice of your toppings","https://www.vegrecipesofindia.com/wp-content/uploads/2012/04/veg-pizza-recipe-1.jpg")
    ]

    getRecipe(){
        return this.recipe.slice();
    }
}