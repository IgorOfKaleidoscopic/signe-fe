import { NgModule } from '@angular/core';

import { UserlistRoutingModule } from './userlist-routing.module';

import { UserlistComponent } from './userlist.component';

@NgModule({
  declarations: [
    UserlistComponent
  ],
  imports: [
    UserlistRoutingModule
  ]
})
export class UserlistModule { }
