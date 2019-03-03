import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";

const appRoute: Routes = [
    {path:'', component: HomeComponent},
    {path:'recipes', loadChildren: './components/recipes/recipes.module#RecipesModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]  
})

export class AppRoutingModule {

}