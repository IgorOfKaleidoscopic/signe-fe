import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    SplashComponent,
    PageNotFoundComponent,
    DialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AssistantModule { }
