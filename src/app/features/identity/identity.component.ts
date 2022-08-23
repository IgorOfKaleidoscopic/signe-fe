import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GitHubGatewayService } from '../../core/git-hub-gateway/git-hub-gateway.service';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {
  sToken: string;
  hide: boolean;

  constructor(
    private githubgwy: GitHubGatewayService,
    private snackBar: MatSnackBar
  ) {
    this.sToken = this.githubgwy.getIdentity();
    this.hide = true;
  }

  ngOnInit(): void {  }

  changeIdentity(): void {
    this.githubgwy.setIdentity(this.sToken);

    this.snackBar.open("Your identity just has changed to " + this.sToken, "OK", {horizontalPosition: 'start', verticalPosition: 'bottom'});
  }

  becomeAnonymous(): void {
    this.sToken = '';
    this.githubgwy.setIdentityToAnonymous();

    this.snackBar.open("You've just become anonymous", "OK", {horizontalPosition: 'start', verticalPosition: 'bottom'});
  }
}
