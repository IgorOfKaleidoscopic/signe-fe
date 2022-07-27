import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './user/user.module'
import { AssistantModule } from './assistant/assistant.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { GlobalsService } from './globals.service';
import { GitHubGatewayService } from './git-hub-gateway.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    AssistantModule,
    UserModule
  ],
  exports: [
  ],
  providers: [
    GlobalsService,
    GitHubGatewayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
