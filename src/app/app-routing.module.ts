import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { RecipeDetailsComponent } from "./components/recipes/recipe-details/recipe-details.component";
import { RecipeStartComponent } from "./components/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./components/recipes/recipe-edit/recipe-edit.component";

const appRoute: Routes = [
    {path:'', redirectTo:'/recipes', pathMatch: 'full'},
    {path:'recipes', component: RecipesComponent, children: [
      {path:'', component: RecipeStartComponent},
      {path:'new', component: RecipeEditComponent},
      {path:':id', component: RecipeDetailsComponent},
      {path:':id/edit', component: RecipeEditComponent}
    ]},
    {path:'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]  
})

export class AppRoutingModule {

}