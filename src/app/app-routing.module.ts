import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { GreetingComponent } from './assistant/greeting/greeting.component';
import { PageNotFoundComponent } from './assistant/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'greeting',
    pathMatch: 'full'
  },
  {
    path: 'greeting',
    component: GreetingComponent
  },
  {
    path: 'userlist',
    component: UserListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
