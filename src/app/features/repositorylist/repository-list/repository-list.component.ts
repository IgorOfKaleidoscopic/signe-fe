import { Component, OnInit } from '@angular/core';

import { GitHubGatewayService } from 'src/app/core/git-hub-gateway/git-hub-gateway.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  constructor(private ghg:GitHubGatewayService) { }

  ngOnInit(): void {
  }

  getFreeCodeCampRL() {
    this.ghg.getRepositoryList().subscribe(response => console.log(response));
  }

}
