import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInUpComponent } from "./sign-in-up/sign-in-up.component";
import { IndexComponent } from "./index/index.component";
import { CreateUsernameComponent } from "./create-username/create-username.component";
import { InterestsSignupComponent } from "./interests-signup/interests-signup.component";

const routes: Routes = [
    {
        path: "login",
        component: SignInUpComponent,
        data: {
            title: "Log In"
        }
    },
    {
        path: "signup",
        component: SignInUpComponent,
        data: {
            title: "Become an author"
        }
    },
    {
        path: "home",
        component: IndexComponent,
        data: {
            title: "Home"
        },
        children: [
            {
                path: "welcome",
                component: IndexComponent,
                data: {
                    title: "Welcome!"
                }
            }
        ]
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "createusername",
        component: CreateUsernameComponent,
        data: {
            title: "Select Username"
        }
    },
    {
        path: 'chooseinterests',
        component: InterestsSignupComponent,
        data: {
            title: "Choose your interests"
        }
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
