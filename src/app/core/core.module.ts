import { NgModule } from '@angular/core';

import { GitHubGatewayService } from './git-hub-gateway/git-hub-gateway.service';
import { UtilitiesService } from './utilities/utilities.service';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    GitHubGatewayService,
    UtilitiesService
  ]
})
export class CoreModule {}
