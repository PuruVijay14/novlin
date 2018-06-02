import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInUpComponent } from "./sign-in-up/sign-in-up.component";
import { IndexComponent } from "./index/index.component";

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
    }
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
