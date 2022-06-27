import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'userlist',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
