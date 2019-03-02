import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListService } from './components/shopping-list/shoppingList.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './components/recipes/recipe.service';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './shared/data-storage.service';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthService } from './components/auth/auth.service';
import { AuthGuard } from './components/auth/authGuard.service';
import { RecipesModule } from './components/recipes/recipes.module'
import { SharedModule } from './shared/shred.module';
import { ShoppingListModule } from './components/shopping-list/shoppingList.module';
import { AuthModule } from './components/auth/auth.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    ShoppingListModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
