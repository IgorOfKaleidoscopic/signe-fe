import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { GlobalsService } from '../globals.service'
import { GitHubGatewayService } from '../git-hub-gateway.service';

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
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
    ],
    providers: [
      GlobalsService,
      GitHubGatewayService
    ]
  })
export class AssistantModule { }
