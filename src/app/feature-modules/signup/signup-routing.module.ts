import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Components */
import { SignInUpComponent } from 'src/app/sign-in-up/sign-in-up.component';
import { CreateUsernameComponent } from 'src/app/create-username/create-username.component';
import { InterestsSignupComponent } from 'src/app/interests-signup/interests-signup.component';

const routes: Routes = [
  {
    path: "signup",
    component: SignInUpComponent,
    data: {
      title: "Become an author"
    }
  },
  {
    path: "login",
    component: SignInUpComponent,
    data: {
      title: "Log In"
    }
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class SignupRoutingModule { }
