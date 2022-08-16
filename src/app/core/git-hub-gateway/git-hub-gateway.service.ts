import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, throwError, catchError } from 'rxjs';

import { RepositoryListModel } from "src/app/shared/models/repository-list-model"

import { GlobalsService } from '../globals/globals.service';

@Injectable({
  providedIn: 'root'
})
export class GitHubGatewayService {
  constructor(private httpc: HttpClient, public globals: GlobalsService) {  }

  getRepositoryList():Observable<RepositoryListModel[]> {
    return this.httpc.get<RepositoryListModel[]>(
      `${this.globals.getGitHubApiBaseURL()}/users/freeCodeCamp/repos`,
      {
        headers: {
          'Accept':'application/vnd.github.v3+json',
          'Authorization':`token ${this.globals.getPAT()}`
        },
        params: {

        }
      }
      );
 }

}
