import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting/greeting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    GreetingComponent,
    PageNotFoundComponent,
    DialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AssistantModule { }
