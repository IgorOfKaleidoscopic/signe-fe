import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RepositoriesComponent } from './user/repositories/repositories.component';
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
    path: 'repositories',
    component: RepositoriesComponent
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
