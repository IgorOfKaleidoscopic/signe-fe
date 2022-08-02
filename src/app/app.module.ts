import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule, // directives for the html code
    CoreModule,
    SharedModule,
    FeaturesModule,
    AppRoutingModule // modularity, the whole content of AppRoutingModule could be in app.module.ts
  ],
  exports: [
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
