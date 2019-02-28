import { Ingredient } from "src/app/models/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
 
    ingredientsChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Onion', 10),
        new Ingredient('Tomatoes', 15)
    ]

    getShoppingList() {
        return this.ingredients.slice()
    }

    getShoppingItem(index:number){
        return this.ingredients[index]
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChange.next(this.ingredients)
    }

    addIngredients(ingredients: Ingredient[]) {
        //spred oerator turns array of elements to list of elements
        this.ingredients.push(...ingredients) 
        this.ingredientsChange.next(this.ingredients.slice())
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient
        this.ingredientsChange.next(this.ingredients.slice())
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index,1)
        this.ingredientsChange.next(this.ingredients.slice())
    }
}