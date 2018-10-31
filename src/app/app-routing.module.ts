import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { SignInUpComponent } from "./sign-in-up/sign-in-up.component";
import { IndexComponent } from "./index/index.component";
import { CreateUsernameComponent } from "./create-username/create-username.component";
import { InterestsSignupComponent } from "./interests-signup/interests-signup.component";

const routes: Routes = [
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
        path: 'chooseinterests',
        loadChildren: './interests-signup/interests-signup.module#InterestsSignupModule'
    },
    {
        path: 'createusername',
        loadChildren: './create-username/create-username.module#CreateUsernameModule'
    },
    {
        path: 'login',
        loadChildren: './sign-in-up/sign-in-up.module#SignInUpModule',
        data: {
            title: 'Login'
        }
    },
    {
        path: 'signup',
        loadChildren: './sign-in-up/sign-in-up.module#SignInUpModule',
        data: {
            title: 'Become a member'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
