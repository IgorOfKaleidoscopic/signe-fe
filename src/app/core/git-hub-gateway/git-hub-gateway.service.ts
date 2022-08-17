import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, throwError, catchError } from 'rxjs';

import { RepositoryListModel } from "src/app/shared/models/repository-list-model"

@Injectable({
  providedIn: 'root'
})
export class GitHubGatewayService {
  PAT: string;
  GitHubApiBaseURL: string;

  constructor(private httpc: HttpClient) {
    this.PAT = "";
    this.GitHubApiBaseURL = 'https://api.github.com';
  }

  setPAT(text: string) {
    this.PAT = text;
  }

  getPAT(): string {
    return this.PAT;
  }

  invalidatePAT(): void {
    this.setPAT("");
  }

  isPATValid(): boolean {
    if (this.getPAT() == "") return false; else return true;
  }

  getGitHubApiBaseURL():string {
    return this.GitHubApiBaseURL;
  }

  getRepositoryList():Observable<RepositoryListModel[]> {
    return this.httpc.get<RepositoryListModel[]>(
      `${this.getGitHubApiBaseURL()}/users/freeCodeCamp/repos`,
      {
        headers: {
          'Accept':'application/vnd.github.v3+json',
          'Authorization':`token ${this.getPAT()}`
        },
        params: {

        }
      }
      );
 }

}
