import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GitHubGatewayService } from '../../core/git-hub-gateway/git-hub-gateway.service';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {
  pat: string;
  hide: boolean;

  constructor(
    private githubgwy: GitHubGatewayService,
    private snackBar: MatSnackBar
  ) {
    this.pat = this.githubgwy.getPAT();
    this.hide = true;
  }

  ngOnInit(): void {  }

  changeIdentity(): void {
    this.githubgwy.setPAT(this.pat);

    this.snackBar.open("Your identity just have changed to " + this.pat, "OK", {horizontalPosition: 'start', verticalPosition: 'bottom'});
  }

  becomeAnonymous(): void {
    this.pat = "";
    this.githubgwy.invalidatePAT();

    this.snackBar.open("You've just become anonymous", "OK", {horizontalPosition: 'start', verticalPosition: 'bottom'});
  }
}
