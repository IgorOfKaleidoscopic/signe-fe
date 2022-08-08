import { Component, OnInit, Inject } from '@angular/core';

import { GlobalsService } from '../../core/globals/globals.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {
  pat: string;
  hide: boolean;

  constructor(
    private globals: GlobalsService,
    private snackbar: SnackBarComponent
  ) {
    this.pat = this.globals.getPAT();
    this.hide = true;
  }

  ngOnInit(): void {
  }

  signIn(): void {
    this.globals.setPAT(this.pat);

    this.snackbar.openSnackBar("You are signed in now", "OK");
  }

  getAnonymous(): void {
    this.globals.invalidatePAT();

    this.snackbar.openSnackBar("You are anonymous now", "OK");
  }
}
