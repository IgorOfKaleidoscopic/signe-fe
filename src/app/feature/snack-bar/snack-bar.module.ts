import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';

import { SnackBarComponent } from './snack-bar.component';

@NgModule({
  declarations: [
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class SnackBarModule { }
