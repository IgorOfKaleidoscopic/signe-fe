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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    AssistantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
