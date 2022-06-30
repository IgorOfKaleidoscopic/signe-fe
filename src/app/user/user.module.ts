import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { RepositoriesComponent } from './repositories/repositories.component';
import { OrderByPipeComponent } from '../assistant/orderby-pipe/orderby-pipe.component';

@NgModule({
  declarations: [
    RepositoriesComponent,
    OrderByPipeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class UserModule { }
