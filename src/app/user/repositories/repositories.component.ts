import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GitHubGatewayService } from '../../git-hub-gateway.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositories: any;

  constructor(private userService: GitHubGatewayService) { }

  ngOnInit() {
    this.repositories = this.userService.getRepositories();;
  }


}
