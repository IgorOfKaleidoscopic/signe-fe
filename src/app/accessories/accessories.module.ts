import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { FormsModule } from '@angular/forms';

import { SplashComponent } from './splash/splash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InfoComponent } from './info/info.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    SplashComponent,
    PageNotFoundComponent,
    InfoComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    SplashComponent,
    PageNotFoundComponent,
    InfoComponent,
    SignInComponent
  ],
  providers: [
  ]
})
export class AssistantModule { }
