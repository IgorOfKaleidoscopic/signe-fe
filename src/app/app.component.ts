import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';

import { SignInComponent } from 'src/app/feature/sign-in/sign-in.component';

import { GlobalsService } from './core/globals/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationName: string;
  loginAction: string;

  constructor(private router: Router, public globals: GlobalsService, public dialog: MatDialog) {
    this.applicationName = 'S I G N E';
    this.loginAction = 'LOG IN';
  }

  openSignInDialog(): void{
    const dialogHandle = this.dialog.open(SignInComponent, {
      data: {name: this.globals.getPAT()}
    });

    dialogHandle.afterClosed().subscribe(result => {
      this.globals.setPAT(result);

      if(this.globals.isPATKnown()) this.loginAction = 'LOG OFF'; else this.loginAction = 'LOG IN';
    });

  }
}
