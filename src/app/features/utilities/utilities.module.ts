import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/shared/components/angular-material.module';

import { UtilitiesComponent } from './utilities.component';

@NgModule({
  declarations: [
    UtilitiesComponent
  ],
  imports: [
    FormsModule,
    AngularMaterialModule
  ],
  exports: [
  ]
})
export class UtilitiesModule { }
