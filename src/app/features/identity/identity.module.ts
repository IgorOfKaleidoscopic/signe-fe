import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/shared/components/angular-material.module';

import { IdentityRoutingModule } from './identity-routing.module';

import { IdentityComponent } from './identity.component';

@NgModule({
  declarations: [
    IdentityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    IdentityRoutingModule
  ]
})
export class IdentityModule { }
