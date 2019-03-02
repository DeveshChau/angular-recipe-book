import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";

const authRouting: Routes = [
    {path:'signup', component:SignUpComponent},
    {path:'signin', component:SignInComponent}
]

@NgModule({
    imports: [RouterModule.forChild(authRouting)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}