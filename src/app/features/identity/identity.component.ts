import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GlobalsService } from '../../core/globals/globals.service';

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
    private snackBar: MatSnackBar
  ) {
    this.pat = this.globals.getPAT();
    this.hide = true;
  }

  ngOnInit(): void {
  }

  changeIdentity(): void {
    this.globals.setPAT(this.pat);

    this.snackBar.open("Your identity just have changed to " + this.pat, "OK", {horizontalPosition: 'start', verticalPosition: 'bottom'});
  }

  becomeAnonymous(): void {
    this.pat = "";
    this.globals.invalidatePAT();

    this.snackBar.open("You've just become anonymous", "OK", {horizontalPosition: 'start', verticalPosition: 'bottom'});
  }
}
