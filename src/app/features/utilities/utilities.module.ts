import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/shared/modules/angular-material.module';
import { UtilitiesRoutingModule } from './utilities-routing.module';

import { UtilitiesComponent } from './utilities.component';


@NgModule({
  declarations: [
    UtilitiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    UtilitiesRoutingModule
  ]
})
export class UtilitiesModule { }
