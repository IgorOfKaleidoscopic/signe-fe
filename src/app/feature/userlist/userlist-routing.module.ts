import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserlistComponent } from './userlist.component';

const routes: Routes = [
  {
    path: '',
    component: UserlistComponent,
    children: [
      {
        path: 'userid',
        loadChildren: () => import('../user/user.module').then(m => m.UserModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlistRoutingModule { }
