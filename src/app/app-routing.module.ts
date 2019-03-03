import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { AuthGuard } from "./components/auth/authGuard.service";

const appRoute: Routes = [
    {path:'', component: HomeComponent},
    {path:'recipes', loadChildren: './components/recipes/recipes.module#RecipesModule', canLoad: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]  
})

export class AppRoutingModule {

}