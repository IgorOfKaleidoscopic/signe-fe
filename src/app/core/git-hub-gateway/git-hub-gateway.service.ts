import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, pipe, map, filter, throwError, catchError } from 'rxjs';

import { RepositoryListModel } from 'src/app/shared/models/repository-list-model';
import { UtilitiesService } from 'src/app/core/utilities/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class GitHubGatewayService {
  token:string;
  baseUrlGitHubApi:string;

  constructor(private httpc: HttpClient, private utils: UtilitiesService) {
    this.token = this.utils.decodeTextFromLocalStorage('ght');
    this.baseUrlGitHubApi = 'https://api.github.com';
  }

  getIdentity():string {
    if(this.token.length == 0) {
      console.log('GitHubGatewayService.getIdentity: You are anonymous');
    } else {
      console.log('GitHubGatewayService.getIdentity: Your identity is marked by token "' + this.token + '"');
    }

    return this.token;
  }

  isAnonymous():boolean {
    return this.token.length == 0;
  }

  setIdentity(text:string) {
    this.token = text;
    this.utils.encodeTextToLocalStorage(this.token, 'ght')

    console.log('GitHubGatewayService.setIdentity: Your identity is marked by token "' + this.token + '"');
  }

  setIdentityToAnonymous(): void {
    this.token = '';
    this.utils.removeEncodedTextFromLocalStorage('ght');

    console.log('GitHubGatewayService.setIdentityToAnonymous: You are anonymous');
  }

  getBaseUrlGitHubApi():string {
    return this.baseUrlGitHubApi;
  }

  getRepositoryList():Observable<RepositoryListModel[]> {
    return this.httpc.get<RepositoryListModel[]>(
      `${this.getBaseUrlGitHubApi()}/users/freeCodeCamp/repos`,
      {
        headers: {
          'Accept':'application/vnd.github.v3+json',
          'Authorization':`token ${this.token}`
        },
        params: {

        }
      }
      ).pipe();
 }

}
