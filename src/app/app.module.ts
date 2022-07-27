import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersModule } from './users/users.module'
import { AccessoriesModule } from './accessories/accessories.module';

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
    AccessoriesModule,
    UsersModule
  ],
  exports: [
  ],
  providers: [
    GlobalsService,
    GitHubGatewayService
  ],
  bootstrap: [
    AppComponent,
    GlobalsService
  ]
})
export class AppModule { }
