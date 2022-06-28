import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './user/user.module'

import { AssistantModule } from './assistant/assistant.module';

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
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,/* EXPERIMENT */
    MatIconModule,/* EXPERIMENT */
    MatSelectModule,/* EXPERIMENT */
    AppRoutingModule,
    UserModule,
    AssistantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
