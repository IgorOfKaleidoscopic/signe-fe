import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { SnackBarModule } from '../snack-bar/snack-bar.module';

import { IdentityComponent } from './identity.component';

@NgModule({
  declarations: [
    IdentityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    SnackBarModule
  ]
})
export class SignInModule { }
