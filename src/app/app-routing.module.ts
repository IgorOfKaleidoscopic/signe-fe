import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './features/splash/splash.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

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
    path: 'identity',
    loadChildren: () => import('./features/identity/identity.module').then(m => m.IdentityModule)
  },
  {
    path: 'userlist',
    loadChildren: () => import('./features/userlist/userlist.module').then(m => m.UserlistModule)
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
