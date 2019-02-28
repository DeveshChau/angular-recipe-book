import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from './shoppingList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList()
    this.subscription = this.shoppingListService.ingredientsChange.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )   
  }

  onEdit(index: number){
    this.shoppingListService.startedEditing.next(index)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
