import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GitHubGatewayService } from '../../git-hub-gateway.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(private userService: GitHubGatewayService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();;
  }


}
