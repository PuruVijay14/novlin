import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InterestsSignupComponent } from './interests-signup.component';
import { MaterialModule } from '../modules/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: InterestsSignupComponent,
    data: {
      title: 'Choose interests'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [InterestsSignupComponent]
})
export class InterestsSignupModule { }
