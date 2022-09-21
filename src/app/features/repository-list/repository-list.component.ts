import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { GitHubGatewayService } from 'src/app/core/git-hub-gateway/git-hub-gateway.service';
import { RepositoryListModel } from 'src/app/shared/models/repository-list-model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  subscr$: Subscription = Subscription.EMPTY;
  loading: boolean = false;
  errorMsg: string = '';
  repos: RepositoryListModel[] = [];

  constructor(private githubgwy:GitHubGatewayService) {  }

  ngOnInit(): void {
  }

  getUserRL(userName: string) {
    this.loading = true;

    this.subscr$ = this.githubgwy.getRepositoryList(userName).subscribe({
      next: (data) => {
        console.info("RepositoryList stream chunk");
        console.log(data);

        this.repos = data;
      },
      error: (err) => {
        console.error(err);

        this.errorMsg = err;
        this.loading = false;
      },
      complete: () => {
        console.info('RepositoryList stream complete');

        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscr$.unsubscribe();
 }
}
