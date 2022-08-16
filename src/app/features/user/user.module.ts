import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { RepositoryListComponent } from '../repositorylist/repository-list/repository-list.component';

@NgModule({
  declarations: [
    UserComponent,
    RepositoryListComponent
  ],
  imports: [
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
