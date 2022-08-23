import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, throwError, catchError } from 'rxjs';

import { RepositoryListModel } from "src/app/shared/models/repository-list-model"

@Injectable({
  providedIn: 'root'
})
export class GitHubGatewayService {
  token:string;
  GitHubApiBaseURL:string;

  constructor(private httpc: HttpClient) {
    this.token = this.readTokenFromLocalStorage();
    this.GitHubApiBaseURL = 'https://api.github.com';
  }

  readTokenFromLocalStorage():string {
    if(localStorage.getItem('00')){
      let arrToken:Uint8Array = new Uint8Array(40);
      let sToken:string;

      for(let i:number = 0; i < 40; i++){
        arrToken[i] = Number(localStorage.getItem(i.toString().padStart(2, '0')));
      }

      sToken = new TextDecoder().decode(arrToken.reverse().filter(elem => elem!=32));

      console.log('GitHubGatewayService: Token "' + sToken + '" found in localStorage. This is your identity');

      return sToken;
    } else {
      console.log('GitHubGatewayService: No token found in localStorage. Means you are anonymous')

      return '';
    }
  }

  writeTokenToLocalStorage(text:string) {
    new TextEncoder().encode(text.padEnd(40, ' ')).reverse().forEach((val, idx) => {
      localStorage.setItem(idx.toString().padStart(2, '0'), val.toString());
    });

    console.log('GitHubGatewayService: Token "' + text + '" has just been written to localStorage');
  }

  removeTokenFromLocalStorage() {
    for(let i:number = 0; i < 40; i++){
      localStorage.removeItem(i.toString().padStart(2, '0'));
    }

    console.log('GitHubGatewayService: Token has been removed from the localStorage')
  }

  getIdentity():string {
    if(this.token.length == 0) {
      console.log('GitHubGatewayService: You are anonymous');
    } else {
      console.log('GitHubGatewayService: Your identity is "' + this.token + '"');
    }

    return this.token;
  }

  isAnonymous():boolean {
    return this.token.length == 0;
  }

  setIdentity(text:string) {
    this.token = text;
    this.writeTokenToLocalStorage(this.token);

    console.log('GitHubGatewayService: Your identity has just changed to "' + this.token + '"');
  }

  setIdentityToAnonymous(): void {
    this.token = '';
    this.removeTokenFromLocalStorage();

    console.log('GitHubGatewayService: You are now anonymous');
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
          'Authorization':`token ${this.token}`
        },
        params: {

        }
      }
      );
 }

}
