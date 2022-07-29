import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalsService } from './globals/globals.service';
import { GitHubGatewayService } from './git-hub-gateway/git-hub-gateway.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GlobalsService,
    GitHubGatewayService
  ]
})
export class CoreModule {}
