import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryListRoutingModule } from './repository-list-routing.module';

import { RepositoryListComponent } from './repository-list.component';

@NgModule({
  declarations: [
    RepositoryListComponent
  ],
  imports: [
    CommonModule,
    RepositoryListRoutingModule
  ]
})
export class RepositoryListModule { }
