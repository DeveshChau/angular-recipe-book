import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component"
import { HomeComponent } from "./home/home.component"
import { SharedModule } from "../shared/shred.module";
import { AppRoutingModule } from "../app-routing.module";
import { AuthService } from "../components/auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "../components/recipes/recipe.service";
import { ShoppingListService } from "../components/shopping-list/shoppingList.service";

@NgModule({
  declarations:[
    HeaderComponent,
    HomeComponent
  ],
  imports:[
      SharedModule,
      AppRoutingModule
  ],
  exports:[AppRoutingModule,HeaderComponent],
  providers:[
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule {}