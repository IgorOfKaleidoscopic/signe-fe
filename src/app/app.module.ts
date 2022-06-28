import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './user/user.module'
import { UserListComponent } from './user/user-list/user-list.component'

import { AssistantModule } from './assistant/assistant.module';
import { GreetingComponent } from './assistant/greeting/greeting.component';
import { PageNotFoundComponent } from './assistant/page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';

import { MatToolbarModule } from '@angular/material/toolbar';/* EXPERIMENT */
import { MatIconModule } from '@angular/material/icon';/* EXPERIMENT */
import { MatSelectModule } from '@angular/material/select';/* EXPERIMENT */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    AssistantModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,/* EXPERIMENT */
    MatIconModule,/* EXPERIMENT */
    MatSelectModule/* EXPERIMENT */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
