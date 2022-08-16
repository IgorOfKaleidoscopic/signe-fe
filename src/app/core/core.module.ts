import { NgModule } from '@angular/core';

import { GlobalsService } from './globals/globals.service';
import { GitHubGatewayService } from './git-hub-gateway/git-hub-gateway.service';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    GlobalsService,
    GitHubGatewayService
  ]
})
export class CoreModule {}
