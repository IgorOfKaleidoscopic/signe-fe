import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';

import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    InfoComponent
  ]
})
export class SharedModule { }
