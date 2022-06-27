import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting/greeting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    GreetingComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AssistantModule { }
