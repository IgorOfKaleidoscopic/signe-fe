import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './user/user.module'
import { AssistantModule } from './assistant/assistant.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

import { GlobalsService } from './globals.service';
import { GitHubGatewayService } from './git-hub-gateway.service';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    AppRoutingModule,
    AssistantModule
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
