import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './feature/splash/splash.component';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';

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
    path: 'signin',
    loadChildren: () => import('./feature/identity/identity.module').then(m => m.SignInModule)
  },
  {
    path: 'userlist',
    loadChildren: () => import('./feature/userlist/userlist.module').then(m => m.UserlistModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: []
})
export class AppRoutingModule { }
