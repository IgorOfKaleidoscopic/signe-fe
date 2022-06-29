import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [
    RepositoriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UserModule { }
