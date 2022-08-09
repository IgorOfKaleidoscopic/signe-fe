import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

import { IdentityComponent } from './identity.component';
import { IdentityRoutingModule } from '../identity/identity-routing.module';

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
