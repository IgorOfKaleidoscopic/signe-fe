import { Component, OnInit } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';

import { GitHubGatewayService } from '../../git-hub-gateway.service';
import { OrderByPipeComponent } from 'src/app/assistant/orderby-pipe/orderby-pipe.component';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositories: any;
  sortOrderOption:string = 'Repo';
  ownerTypeOption:string = 'User';

  constructor(private userService: GitHubGatewayService) { }

  ngOnInit() {
    this.repositories = this.userService.getRepositories();
  }


}
