import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInUpComponent } from './sign-in-up.component';
import { SharedModuleModule } from "../modules/shared-module/shared-module.module";
import { MaterialModule } from "../modules/material/material.module";

const routes: Routes = [
  {
    path: '',
    component: SignInUpComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModuleModule,
    MaterialModule
  ],
  declarations: [SignInUpComponent]
})
export class SignInUpModule { }
