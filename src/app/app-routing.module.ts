import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { SplashComponent } from './assistant/splash/splash.component';
import { PageNotFoundComponent } from './assistant/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    component: SplashComponent
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
