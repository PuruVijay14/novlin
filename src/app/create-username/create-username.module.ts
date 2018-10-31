import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsernameComponent } from './create-username.component';
import { MaterialModule } from '../modules/material/material.module';
import { SharedModuleModule } from '../modules/shared-module/shared-module.module';

const routes: Routes = [
  {
    path: '',
    component: CreateUsernameComponent,
    data: {
      title: 'Create Username'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModuleModule,
    MaterialModule,
  ],
  declarations: [CreateUsernameComponent]
})
export class CreateUsernameModule { }
