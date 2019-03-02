import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RecipesComponent } from "./recipes.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shred.module";
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailsComponent,
        RecipeEditComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeItemComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        CommonModule,
        RecipesRoutingModule
    ]
})

export class RecipesModule {    
}