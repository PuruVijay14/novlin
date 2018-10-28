import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';

import { SignInUpComponent } from 'src/app/sign-in-up/sign-in-up.component';
import { CreateUsernameComponent } from 'src/app/create-username/create-username.component';
import { InterestsSignupComponent } from 'src/app/interests-signup/interests-signup.component';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  exports: [SignInUpComponent, CreateUsernameComponent, InterestsSignupComponent],
  declarations: [SignInUpComponent, CreateUsernameComponent, InterestsSignupComponent]
})
export class SignupModule { }
