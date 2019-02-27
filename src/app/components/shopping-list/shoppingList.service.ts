import { Ingredient } from "src/app/models/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
 
    ingredientsChange = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Onion', 10),
        new Ingredient('Tomatoes', 15)
    ]

    getShoppingList() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChange.emit(this.ingredients)
    }

    addIngredients(ingredients: Ingredient[]) {
        //spred oerator turns array of elements to list of elements
        this.ingredients.push(...ingredients) 
        this.ingredientsChange.emit(this.ingredients.slice())
    }
}