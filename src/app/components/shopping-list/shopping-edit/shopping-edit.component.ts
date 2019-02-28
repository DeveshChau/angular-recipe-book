import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm
  subscription: Subscription;
  editmode = false;
  editTextItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editmode = true
        this.editTextItemIndex = index
        this.editedItem = this.shoppingListService.getShoppingItem(index)
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onSubmit(form: NgForm){
    const value = form.value
    const newIngredient = new Ingredient(value.name,value.amount)
    if(this.editmode){
      this.shoppingListService.updateIngredient(this.editTextItemIndex,newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient)
    }
    this.editmode = false
    form.reset()
  }

  onClear(){
    this.slForm.reset()
    this.editmode = false
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editTextItemIndex)
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
