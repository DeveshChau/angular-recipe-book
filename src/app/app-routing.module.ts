import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const appRoute: Routes = [
    {path:'', component: HomeComponent},
    {path:'recipes', loadChildren: './components/recipes/recipes.module#RecipesModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]  
})

export class AppRoutingModule {

}